/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 分页参数
 * @网站: https://www.imsle.com
*/

export interface IPagination{
    totalCount: number,
    pageSize: number,
    totalPage: number,
    currPage: number
}