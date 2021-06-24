/**
 * @作者: Seale
 * @时间: 2021/6/24
 * @版本: V1.0
 * @说明: 文章详情对象
 * @网站: https://www.imsle.com
*/


export interface IArticle{
    id: string,
    picurl: string,
    title: string,
    content: string,
    remark: string,
    type: number,
    orgId: number,
    orgName: string,
    time: string,
    hostpeople: string | null
}