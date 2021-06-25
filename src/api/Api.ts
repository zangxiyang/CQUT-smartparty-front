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
    BRANCH_HISTORY_API = '/front/devhistory/member/list',
    // 支部工作计划，支部工作总结，书记讲党课，述职报告
    BRANCH_PARTYWORK_LIST = '/front/partyWork/list',
    // 工作计划文章详情
    BRANCH_WORK_DETAIL_API = '/front/partyWork/workDetail',
    // 学习笔记
    STUDY_NOTE_API = '/front/training/getNotes',
    // 党费缴纳列表
    PARTY_FEE_API = '/front/partyWork/getPayment',
    // 党组织关系转接
    PARTY_RELATION_API = '/front/partyWork/getTransfer',
    // 党支部年度考核等级
    BRANCH_YEAR_LEVEL_API = '/front/partyWork/listKhdj',
    // 党员政治生日
    PARTY_MEMBER_BIRTH_API = '/front/birth/member/list',
    // 年度发展党员统计，返回发展年度
    PARTY_GROW_API = '/front/partyWork/partyGrow',
    // 年度发展党员列表
    PARTY_GROW_LIST_API = '/front/partyWork/partyGrow/list'
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