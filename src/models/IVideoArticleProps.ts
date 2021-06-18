/**
 * 党员大会接口数据类型定义
 */
//卡片数据类型
export interface ColumnProps{
    id:string
    href:string,
    title:string,
    narrator:string,
    tag:string,
    time:any
}

export  interface VideoArticleProp{
    listArr :ColumnProps
}

