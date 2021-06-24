/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: API 地址枚举
 * @网站: https://www.imsle.com
*/

const baseApi = process.env.VUE_APP_BASE_API;

export enum ApiEnum{
    // 党支部列表
    BASE_BRANCHES_API = '/front/common/party/list',
    // 全体党员
    WORK_MEMBER_API = '/front/partyWork/partyMemberList',
    // 党员详情
    WORK_MEMBER_DETAIL_API = '/front/partyWork/partyMember/',
    // 支部发展历程
    BRANCH_HISTORY_API = '/front/devhistory/member/list'

}

/**
 * 名称: getApi
 * 说明: 得到接口请求地址
 * 作者: Seale
 * 时间: 2021/6/22
 * 版本: V1
*/
export function getApi(api: string): string{
    return baseApi + api;
}