/**
 * @作者: Seale
 * @时间: 2021/6/24
 * @版本: V1.0
 * @说明: 支部发展历程数据结构
 * @网站: https://www.imsle.com
*/

export interface IPartyHistory{
    id: number;
    date: string;
    content: string;
    title: string;
    picurl: string | number
    orgid: number
}