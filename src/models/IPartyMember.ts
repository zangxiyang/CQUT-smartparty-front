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
    post: number,
    status: number,
    intotime: string,
    outtime: string,
    orgid: number,
    visage: number,
    partyage: number | null
}