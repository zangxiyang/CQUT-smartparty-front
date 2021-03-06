/**
 * @作者: Seale
 * @时间: 2021/6/16
 * @版本: V1.0
 * @说明: Interface格式
 * @网站: https://www.imsle.com
*/

interface PartyBranch{
    name: string,   // 支部名称
    id: string   // 向后端请求的值
}

interface IMemberList {
    name: string,   // 姓名
    img: string,    // 照片url
    id: string      // 当前党员的id，以便于查看党员的详细信息
    year: string,   // 党龄
    info: string,   // 于...入党 入党时间
}
interface BreadNav {
    name: string;
    path: string;
    text: string;
    parent: BreadNav | null;
}

export {
    PartyBranch, IMemberList,BreadNav
}