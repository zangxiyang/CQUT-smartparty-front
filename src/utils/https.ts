// http.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from "qs"
import { ElMessage } from 'element-plus'
import {apiURL} from './apiURL'
const showStatus = (status: number) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

const service = axios.create({
    // 联调
    baseURL: apiURL,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        // post: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // }
    },
    // 是否跨站点访问控制请求
    withCredentials: true,
    timeout: 20000,
    transformRequest: [(data) => {
        data = JSON.stringify(data)
        return data
    }],
    validateStatus() {
        // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
        return true
    },
    transformResponse: [(data) => {
        if (typeof data === 'string' && data.startsWith('{')) {
            data = JSON.parse(data)
        }
        return data
    }]

});

// 请求方式
export class Methods {
    public static GET = 'get'
    public static POST = 'post'
    public static DELETE = 'delete'
    public static PUT = 'put'
}

// 封装axios请求
export async function request<T>(url: string, method: string, params?: object): Promise<AxiosResponse<T>>{
 switch (method.toLowerCase()){
     case Methods.GET:
         // 当前是get请求
         return service.get(url,{params});
     case Methods.POST:
         // 当前是post请求
         return axios.post(url,params);
     default:
         return axios.get(url,{params});
 }
}


// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map()
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(url)) { // 如果 pending 中不存在当前请求，则添加进去
            pending.set(url, cancel)
        }
    })
}
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: AxiosRequestConfig) => {
    const url = [
        config.method,
        config.url,
        qs.stringify(config.params),
        qs.stringify(config.data)
    ].join('&')

    if (pending.has(url)) { // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
        const cancel = pending.get(url)
        cancel(url)
        pending.delete(url)
    }
}

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
    for (const [url, cancel] of pending) {
        cancel(url)
    }
    pending.clear()
}

// 请求拦截器
service.interceptors.request.use((config: AxiosRequestConfig) => {
    // removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    // addPending(config) // 将当前请求添加到 pending 中
    return config
}, (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
})

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {

    // removePending(response) // 在请求结束后，移除本次请求
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        msg = showStatus(status)
        if (typeof response.data === 'string') {
            response.data = { msg }
        } else {
            response.data.msg = msg
        }
    }
    return response.data;
}, (error) => {
    if (axios.isCancel(error)) {
        console.log('repeated request: ' + error.message)
    } else {
        // handle error code
        // 错误抛到业务代码
        error.data = {}
        error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
        ElMessage.error(error.data.msg)
    }
    return Promise.reject(error)
})

export default service