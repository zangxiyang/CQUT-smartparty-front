import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引用mock数据测试
if (process.env.NODE_ENV === 'development') {
    console.log("mock测试")
    require('./mock')
}else {
    console.log(process.env.VUE_APP_BASE_API)
    console.log("真实api")
}
createApp(App).use(store).use(router).mount('#app')
