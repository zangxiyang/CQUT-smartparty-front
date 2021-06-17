import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installMaxerStore, {Maxer} from './store/maxer.mixin'
import initStorePersistence from './store/store.persistence'

// 引入 maxer 核心 scss
import './assets/scss/maxer.core.scss'

import installElementPlus from './plugins/element'
import {ElMessage, ElNotification} from "element-plus";

// 声明全局组件
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: typeof ElMessage; // 加入全局message
        $notify: typeof  ElNotification; // 加入全局notify
        $m: Maxer;  // 声明全局方法
    }
}


//引用mock数据测试
if (process.env.NODE_ENV === 'development') {
    console.log("mock测试")
    require('./mock')
}else {
    console.log(process.env.VUE_APP_BASE_API)
    console.log("真实api")
}
const app = createApp(App)
installElementPlus(app)
installMaxerStore(app) // 全局混入vuex
initStorePersistence(store) // 初始化持久化vuex
app.use(store).use(router).mount('#app')