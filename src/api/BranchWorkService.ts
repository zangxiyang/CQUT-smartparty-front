/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 党务工作服务
 * @网站: https://www.imsle.com
*/
import {AxiosResponse} from "axios";
import {request} from "@/utils/https";
import {ApiEnum, getApi} from "@/api/Api";
import {Configuration} from "@/api/Configuration";

export class BranchWorkService{
    public static async getPartyMemberList(orgid = 1,page: number = Configuration.page, limit: number = Configuration.limit): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.WORK_MEMBER_API),'get',{
            orgid,
            page,
            limit
        })
    }
    public static async getPartyMemberDetail(id: number){
        return request(`${getApi(ApiEnum.WORK_MEMBER_DETAIL_API)}${id}`,'get')
    }
}