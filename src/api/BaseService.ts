/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明:
 * @网站: https://www.imsle.com
*/
import {AxiosResponse} from "axios";
import {request} from "@/utils/https";
import {ApiEnum, getApi} from "@/api/Api";


/**
 * 名称: 基本服务
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/22
 * 版本: V1
*/
export class BaseService{
    // 取得所有党支部
    public static async getBranch(): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.BASE_BRANCHES_API),'get');
    }
}