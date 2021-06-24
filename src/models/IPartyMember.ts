/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 党员信息模型
 * @网站: https://www.imsle.com
*/

export interface IPartyMember{
    id: number,
    name: string,
    sex: string,
    education: string,
    "introduction": string,
    picurl: string,
    birth: string,
    applytime: string,
    activisttime: string,
    developtime: string,
    preparetime: string,
    formaltime: string,
    post: number | string,
    status: number,
    intotime: string,
    outtime: string,
    orgid: number,
    orgName: string,
    visage: number | string,
    partyage: number | null
}