/**
 * @作者: Seale
 * @时间: 2021/6/22
 * @版本: V1.0
 * @说明: 预加载
 * @网站: https://www.imsle.com
*/
import {BaseService} from "@/api";
import {Maxer} from "@/store/maxer.mixin";
import store from '@/store'

export default (): void =>{
    // 进行初始化
    BaseService.getBranch().then(res=>{
        console.log('=============首屏加载开始=============')
        new Maxer().vuex('vuexBranches',res.data);
        console.log(store.state.vuexBranches);
        console.log('=============首屏加载结束=============')
    })
}