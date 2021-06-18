import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {clearPending} from '@/utils/https'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AllPartyMember',
    component: ()=> import('../views/AllPartyMember.vue'),
    meta:{
      keepAlive:true,
      bradNavText:'首页'
    }
  },
  {
    path:'/member/:id',
    name:'MemberDetail',
    component:()=>import('../views/MemberDetail.vue'),
    props:true,
    meta:{
      keepAlive: true,
      parent:'AllPartyMember',
      breadNavText:'党员详情'
    }
  },
  //  三会一课
  {
    path: '/assembly',
    name: 'Assembly',
    component: ()=> import('../views/ThreeMeetLesson/Assembly.vue'),
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //在跳转路由之前，先清除所有的请求
  clearPending()
  // ...
  next()
})

export default router
