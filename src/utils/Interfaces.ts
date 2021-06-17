/**
 * @作者: Seale
 * @时间: 2021/6/16
 * @版本: V1.0
 * @说明: Interface格式
 * @网站: https://www.imsle.com
*/

interface PartyBranch{
    name: string,   // 支部名称
    value: string   // 向后端请求的值
}

interface MemberList {
    name: string,   // 姓名
    img: string,    // 照片url
    id: string      // 当前党员的id，以便于查看党员的详细信息
}


export {
    PartyBranch, MemberList
}