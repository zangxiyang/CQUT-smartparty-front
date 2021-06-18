import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {clearPending} from '@/utils/https'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'AllPartyMember',
        component: () => import('../views/BranchManagement/AllMember/AllPartyMember.vue'),
        meta: {
            keepAlive: true,
        }
    }, {
        path: '/branch/member/:id',
        name: 'MemberDetail',
        component: () => import('../views/BranchManagement/AllMember/MemberDetail.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 党费缴纳
        path: '/branch/partyFee',
        name: 'PartyFeePayment',
        component: ()=> import('../views/BranchManagement/PartyFeePayment.vue')
    },
    {
        // 三会一课 -> 党员大会
        path: '/meeting/assembly',
        name: 'Assembly',
        component: ()=> import('../views/ThreeMeetLesson/Assembly.vue')
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
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

router.afterEach(() => {
    // 保证切换路由的时候页面在最顶部
    window.scrollTo({
        top: 0
    })
})

export default router
