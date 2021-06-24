/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 党务工作服务
 * @网站: https://www.imsle.com
*/
import {AxiosResponse} from "axios";
import {Methods, request} from "@/utils/https";
import {ApiEnum, getApi} from "@/api/Api";
import {Configuration} from "@/api/Configuration";

export class BranchWorkService{


    /**
     * 名称: getPartyMemberList
     * 说明: 获取党员列表接口
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
    */
    public static async getPartyMemberList(orgid = 1,page: number = Configuration.page, limit: number = Configuration.limit): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.WORK_MEMBER_API),'get',{
            orgid,
            page,
            limit
        })
    }

    /**
     * 名称: getPartyMemberDetail
     * 说明: 获取党员详情接口
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
    */
    public static async getPartyMemberDetail(id: number): Promise<AxiosResponse>{
        return request(`${getApi(ApiEnum.WORK_MEMBER_DETAIL_API)}${id}`,'get')
    }

    /**
     * 名称: getPartyWorkList
     * 说明: 获取工作计划列表
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
    */
    public static async getPartyWorkList(orgId = 1,page:number = Configuration.page, limit: number = Configuration.limit): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.BRANCH_PARTYWORK_LIST),Methods.GET,{
            orgId,
            page,
            limit,
            type: 0
        })
    }


    /**
     * 名称: getPartyWorkDetail
     * 说明: 获取工作计划文章详情
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
    */
    public static async getPartyWorkDetail(workId: number): Promise<AxiosResponse>{
        return request(`${getApi(ApiEnum.BRANCH_WORK_DETAIL_API)}/${workId}`,Methods.GET)
    }
}