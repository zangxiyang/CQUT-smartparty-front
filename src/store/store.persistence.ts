/**
 * @作者: Seale
 * @时间: 2021/1/24
 * @版本: V1.0
 * @说明: vuex数据持久化，防止F5之后数据消失
 * @网站: https://www.imsle.com
 */
import {Store} from "vuex";

export default<T> (store: Store<T>): void=>{
    // 不需要持久化的数据存入sessionStorage
    if (sessionStorage.getItem('store')){
        store.replaceState(
            Object.assign(
                {},
                store.state,
                JSON.parse(sessionStorage.getItem('store') as string)
            )
        );
        // 移除sessionStorage中的数据
        sessionStorage.removeItem("store");
    }
    // 页面刷新的时候进行持久化
    window.addEventListener('beforeunload',()=>{
        sessionStorage.setItem("store", JSON.stringify(store.state));
    })
}