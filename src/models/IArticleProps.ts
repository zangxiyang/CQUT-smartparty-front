/**
 * 文章列表接口数据类型定义
 */
//文章列表数据类型
export interface ArticleProps{
    id:string
    href:string,
    title:string,
    content:string
    time:any
}

export  interface ArticlelistProps{
    list :ArticleProps
}

