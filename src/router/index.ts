import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {clearPending} from '@/utils/https'
import {Maxer} from "@/store/maxer.mixin";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'AllPartyMember',
        component: () => import('../views/BranchManagement/AllMember/AllPartyMember.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    }, {
        path: '/branch/member/:id',
        name: 'MemberDetail',
        component: () => import('../views/BranchManagement/AllMember/MemberDetail.vue'),
        props: true,
        meta:{
            navName: '党务工作'
        }
    }, {
        // 工作计划
        path: '/branch/plan/',
        name: 'WorkPlan',
        component: () => import('../views/BranchManagement/WorkPlan.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    }, {
        // 工作总结
        path: '/branch/summary/',
        name: 'WorkSummary',
        component: () => import('../views/BranchManagement/WorkSummary.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    },
    {
        // 书记述职报告
        path: '/branch/report',
        name: 'SecretaryReport',
        component: () => import('../views/BranchManagement/report/SecretaryReport.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    }, {
        // 书记讲党课
        path: '/branch/lesson',
        name: 'SecretaryLesson',
        component: () => import('../views/BranchManagement/SecretaryLesson.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    },
    {
        // 年度等级考核
        path: '/branch/level',
        name: 'AssessmentLevel',
        component: () => import('../views/BranchManagement/report/AssessmentLevel.vue'),
        meta: {
            keepAlive: true,
            navName: '党务工作'
        }
    },
    {
        // 党费缴纳
        path: '/branch/partyFee',
        name: 'PartyFeePayment',
        component: () => import('../views/BranchManagement/PartyFeePayment.vue'),
        meta:{
            navName: '党务工作'
        }
    }, {
        // 党组织关系转接
        path: '/branch/partyRelation',
        name: 'partyRelation',
        component: () => import('../views/BranchManagement/PartyRelation.vue'),
        meta: {
            navName: '党务工作'
        }
    },
    {
        // 党日活动 -> 主题党日
        path: '/activity/day',
        name: 'PartyDay',
        component: () => import('../views/Activity/PartyDay.vue'),
        meta: {
            navName: '党日活动'
        }
    },
    {
        // 党日活动 -> 民主评议
        path: '/activity/democratic',
        name: 'DemocraticAppraisal',
        component: () => import('../views/Activity/DemocraticAppraisal.vue'),
        meta: {
            navName: '党日活动'
        }
    }, {
        // 党日活动 -> 志愿活动
        path: '/activity/volunteer',
        name: 'VolunteerActivity',
        component: () => import('../views/Activity/VolunteerActivity.vue'),
        meta: {
            navName: '党日活动'
        }
    },{
        // 党日活动 -> 重温入党誓词
        path: '/activity/review',
        name: 'ReviewParty',
        component: () => import('../views/Activity/ReviewParty.vue'),
        meta: {
            navName: '党日活动'
        }
    },
    {
        // 三会一课 -> 党员大会
        path: '/meeting/assembly',
        name: 'Assembly',
        component: () => import('../views/ThreeMeetLesson/Assembly.vue'),
        meta: {
            keepAlive: true,
            navName: '三会一课'
        }
    }, {
        // 三会一课 -> 党支部委员会会议
        path: '/meeting/branchMeeting',
        name: 'BranchMeeting',
        component: () => import('../views/ThreeMeetLesson/BranchMeeting.vue'),
        meta: {
            navName: '三会一课'
        }
    },
    {
        // 三会一课 -> 党课
        path: '/meeting/party',
        name: 'PartyLesson',
        component: () => import('../views/ThreeMeetLesson/PartyLesson.vue'),
        meta:{
            navName: '三会一课'
        }
    },
    {
        // 学习培训->书记轮训
        path: '/train/assembly',
        name: 'SecretaryTrain',
        component: () => import('../views/TrainingAndLearning/SecretaryTrain.vue'),
        meta: {
            keepAlive: true,
            navName: '学习培训'
        }
    }, {
        // 学习培训->学习笔记
        path: '/train/note',
        name: 'StudyNote',
        component: () => import('../views/TrainingAndLearning/StudyNote.vue'),
        meta: {
            keepAlive: true,
            navName: '学习培训'
        },
    },
    {
        // 政治生日->政治生日活动场景
        path: '/life/scene',
        name: 'ActivityScene',
        component: () => import('../views/PoliticalLife/ActivityScene.vue'),
        meta: {
            keepAlive: true,
            navName: '政治生日'
        }
    },
    {
        // 政治生日->党员政治生日
        path: '/life/member',
        name: 'MemberLife',
        component: () => import('../views/PoliticalLife/MemberBirthday.vue'),
        meta: {
            keepAlive: true,
            navName: "政治生日"
        }
    },
    {
        // 政治生日->政治生日感言
        path: '/life/recollection',
        name: 'Recollection',
        component: () => import('../views/PoliticalLife/Recollections.vue'),
        meta: {
            keepAlive: true,
            navName: "政治生日"
        }
    },{
        // 党员发展->年度发展党员
        path: '/expand/year',
        name: 'ExpandPartyMember',
        component: () => import('../views/Expand/ExpandMember.vue'),
        meta: {
            keepAlive: true,
            navName: "党员发展"
        }
    },{
        // 党员发展->入党流程
        path: '/expand/process',
        name: 'JoinProcess',
        component: () => import('../views/Expand/JoinProcess.vue'),
        meta: {
            keepAlive: true,
            navName: "党员发展"
        }
    },{
        // 基本组件->文章详情
        path: '/article/:id',
        name: 'Article',
        component: () => import('../views/Base/Article.vue'),
        props: true,
    },
    {
        // 支部发展 -> 发展历程
        path: '/development/history',
        name: 'History',
        component: () => import('../views/BranchDevelopment/History.vue'),
        meta:{
            navName: '支部发展'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    //在跳转路由之前，先清除所有的请求
    clearPending()
    // ...

    // 当前访问文章详情界面
    if (to.name ==='Article'){
        // 加载nav名称和路由名称进入vuex中
        const maxer = new Maxer();
        maxer.vuex('vuexNavRouterName',from.name);
        maxer.vuex('vuexNavName',from.meta.navName);
        console.log(from.name)
        console.log(from.meta.navName)
    }

    next()
})

router.afterEach(() => {
    // 保证切换路由的时候页面在最顶部
    window.scrollTo({
        top: 0
    })
})

export default router
