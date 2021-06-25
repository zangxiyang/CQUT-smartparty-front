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

export class BranchWorkService {


    /**
     * 名称: getPartyMemberList
     * 说明: 获取党员列表接口
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
     */
    public static async getPartyMemberList(orgid = 1, page: number = Configuration.page, limit: number = Configuration.limit): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.WORK_MEMBER_API), 'get', {
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
    public static async getPartyMemberDetail(id: number): Promise<AxiosResponse> {
        return request(`${getApi(ApiEnum.WORK_MEMBER_DETAIL_API)}${id}`, 'get')
    }

    /**
     * 名称: getPartyWorkList
     * 说明: 获取工作计划列表
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
     */
    public static async getPartyWorkList(orgId = 1, type = 0, page: number = Configuration.page, limit: number = Configuration.limit): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.BRANCH_PARTYWORK_LIST), Methods.GET, {
            orgId,
            page,
            limit,
            type
        })
    }


    /**
     * 名称: getPartyWorkDetail
     * 说明: 获取工作计划文章详情
     * 作者: Seale
     * 时间: 2021/6/24
     * 版本: V1
     */
    public static async getPartyWorkDetail(workId: number): Promise<AxiosResponse> {
        return request(`${getApi(ApiEnum.BRANCH_WORK_DETAIL_API)}/${workId}`, Methods.GET)
    }

    /**
     * 名称: getStudyNote
     * 说明: 获取学习笔记列表
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
     */
    public static async getStudyNote(orgId = 1, page = 1, limit = 12): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.STUDY_NOTE_API), Methods.GET, {
            orgId,
            page,
            limit
        });
    }

    /**
     * 名称: getPayment
     * 说明: 党费缴纳列表
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
     */
    public static async getPayment(orgId = 1, page = 1, limit = 12): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.PARTY_FEE_API), Methods.GET, {
            orgId,
            page,
            limit
        })
    }

    /**
     * 名称: getPartyTransfer
     * 说明: 党组织关系转接
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
     */
    public static async getPartyTransfer(orgId = 1, page = 1, limit = 12): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.PARTY_RELATION_API), Methods.GET, {
            orgId,
            page,
            limit
        })
    }

    /**
     * 名称: getBranchYearLevelList
     * 说明: 党支部年度考核列表
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
     */
    public static async getBranchYearLevelList(orgId = 1, page = 1, limit = 12): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.BRANCH_YEAR_LEVEL_API), Methods.GET, {
            orgId,
            page,
            limit
        })
    }

    /**
     * 名称: getPartyMemberBirth
     * 说明: 获取党员政治生日列表
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
    */
    public static async getPartyMemberBirth(orgid = 1, page = 1, limit = 18): Promise<AxiosResponse> {
        return request(getApi(ApiEnum.PARTY_MEMBER_BIRTH_API),Methods.GET,{
            orgid,
            page,
            limit
        })
    }

    /**
     * 名称: getPartyGrowInfo
     * 说明: 获取年度发展党员基础信息
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
    */
    public static async getPartyGrowInfo(orgId = 1): Promise<AxiosResponse>{
        return request(`${getApi(ApiEnum.PARTY_GROW_API)}/${orgId}`,Methods.GET)
    }

    /**
     * 名称: getPartyGrowList
     * 说明: 获取年度发展党员列表
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
    */
    public static async getPartyGrowList(year:string, orgId = 1, page = 1, limit = 18): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.PARTY_GROW_LIST_API),Methods.GET,{
            year,
            orgId,
            page,
            limit
        })
    }
    /**
     * 名称: getAppraisal
     * 说明: 获取民主评议结果
     * 作者: Seale
     * 时间: 2021/6/25
     * 版本: V1
    */
    public static async getAppraisal(workId: number, page = 1 , limit = 6): Promise<AxiosResponse>{
        return request(getApi(ApiEnum.PARTY_DEMOCRATIC_RESULT_API),Methods.GET,{
            workId,
            page,
            limit
        })
    }
}
