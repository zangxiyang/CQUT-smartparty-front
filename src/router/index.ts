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
    },{
        // 党组织关系转接
        path: '/branch/partyRelation',
        name: 'partyRelation',
        component: ()=> import('../views/BranchManagement/PartyRelation.vue')
    },
    {
        // 党日活动 -> 民主评议
        path: '/activity/democratic',
        name: 'DemocraticAppraisal',
        component: ()=> import('../views/Activity/DemocraticAppraisal.vue')
    },
    {
        // 三会一课 -> 党员大会
        path: '/meeting/assembly',
        name: 'Assembly',
        component: ()=> import('../views/ThreeMeetLesson/Assembly.vue'),
        meta:{
            keepAlive: true
        }
    },
    {
        // 学习培训->书记轮训
        path: '/train/assembly',
        name: 'SecretaryTrain',
        component: ()=> import('../views/TrainingAndLearning/SecretaryTrain.vue'),
        meta:{
            keepAlive: true
        }
    },{
        // 学习培训->学习笔记
        path: '/train/note',
        name: 'StudyNote',
        component: ()=> import('../views/TrainingAndLearning/StudyNote.vue'),
        meta:{
            keepAlive: true
        }
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
