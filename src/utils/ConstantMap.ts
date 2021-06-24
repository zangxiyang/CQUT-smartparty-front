/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 映射
 * @网站: https://www.imsle.com
*/


export function postMap(val: number): string{
    switch (val){
        case 0:
            return '学生';
        case 1:
            return "副书记";
        case 2:
            return "组织委员";
        case 3:
            return "宣传委员";
        case 4:
            return "纪律委员";
        case 5:
            return "书记";
        default:
            return "错误";
    }
}

export function visageMap(val: number): string{
    switch (val){
        case 0:
            return "正式党员";
        case 1:
            return "预备党员";
        case 2:
            return "积极分子";
        case 3:
            return "团员";
        case 4:
            return "群众";
        default:
            return "错误";
    }
}