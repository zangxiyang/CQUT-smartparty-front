import Axios from '../utils/https'
import { HttpResponse } from './axios_type'
/**
 * @interface loginParams -登录参数
 * @property {string} username -用户名
 * @property {string} password -用户密码
 */
interface LoginParams {
    username: string
    password: string
}
//封装User类型的接口方法
export class UserService {
    /**
     * @description 查询User的信息
     * @return {HttpResponse} result
     * @param params
     */
    static async login(): Promise<HttpResponse> {
        return Axios('/userdasdasd', {
            method: 'get',
            responseType: 'json',
            // params: {
            //     ...params
            // },
        })
    }

}