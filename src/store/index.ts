import { createStore } from 'vuex'
import {PropType} from 'vue'
import {BreadNav} from '@/utils/Interfaces'

export default createStore({
  state: {
    vuexTestVar: "这是vuex全局混入的测试变量",
    vuexUser:{
      test: 1,
      name: "测试名字"
    },
    vuexBreadNav: [
      {
        name: 'AllPartyMember',
        path: '/',
        text: '首页'
      }
    ]as BreadNav[], // 面包屑导航
    vuexBranches: []
    // todo 提出
    // 缓存列表
    /*vuexCacheView:[
      'MaxerHeader','Login','Register','HomeHeaderLayout','Home'
    ],*/
  },
  mutations: {
    $changeStore(state: any,payload: any){
      // 判断是否为多层级调用，state中为对象存在的情况，诸如user.info.name = '龚南柯'
      const nameArr = payload.name.split('.');
      const len = nameArr.length;
      if (len >= 2){

        let obj = state[nameArr[0]];
        for (let i = 1 ; i < len - 1 ; i++){
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len-1]] = payload.value;
      }else {
        state[payload.name] = payload.value;
      }
    }
  },
  actions: {
    $changStoreAsync(context,payload){
      context.commit('$changeStore',payload);
    }
  },
  modules: {
  }
})
