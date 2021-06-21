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
    }, {
        // 工作计划
        path: '/branch/plan/',
        name: 'WorkPlan',
        component: () => import('../views/BranchManagement/WorkPlan.vue'),
        meta: {
            keepAlive: true
        }
    }, {
        // 工作总结
        path: '/branch/summary/',
        name: 'WorkSummary',
        component: () => import('../views/BranchManagement/WorkSummary.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 书记述职报告
        path: '/branch/report',
        name: 'SecretaryReport',
        component: () => import('../views/BranchManagement/report/SecretaryReport.vue'),
        meta: {
            keepAlive: true
        }
    }, {
        // 书记讲党课
        path: '/branch/lesson',
        name: 'SecretaryLesson',
        component: () => import('../views/BranchManagement/SecretaryLesson.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 年度等级考核
        path: '/branch/level',
        name: 'AssessmentLevel',
        component: () => import('../views/BranchManagement/report/AssessmentLevel.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 党费缴纳
        path: '/branch/partyFee',
        name: 'PartyFeePayment',
        component: () => import('../views/BranchManagement/PartyFeePayment.vue')
    }, {
        // 党组织关系转接
        path: '/branch/partyRelation',
        name: 'partyRelation',
        component: () => import('../views/BranchManagement/PartyRelation.vue')
    },
    {
        // 党日活动 -> 主题党日
        path: '/activity/day',
        name: 'PartyDay',
        component: () => import('../views/Activity/PartyDay.vue')
    },
    {
        // 党日活动 -> 民主评议
        path: '/activity/democratic',
        name: 'DemocraticAppraisal',
        component: () => import('../views/Activity/DemocraticAppraisal.vue')
    }, {
        // 党日活动 -> 志愿活动
        path: '/activity/volunteer',
        name: 'VolunteerActivity',
        component: () => import('../views/Activity/VolunteerActivity.vue')
    },{
        // 党日活动 -> 重温入党誓词
        path: '/activity/review',
        name: 'ReviewParty',
        component: () => import('../views/Activity/ReviewParty.vue')
    },
    {
        // 三会一课 -> 党员大会
        path: '/meeting/assembly',
        name: 'Assembly',
        component: () => import('../views/ThreeMeetLesson/Assembly.vue'),
        meta: {
            keepAlive: true
        }
    }, {
        // 三会一课 -> 党支部委员会会议
        path: '/meeting/branchMeeting',
        name: 'BranchMeeting',
        component: () => import('../views/ThreeMeetLesson/BranchMeeting.vue'),
    },
    {
        // 三会一课 -> 党课
        path: '/meeting/party',
        name: 'PartyLesson',
        component: () => import('../views/ThreeMeetLesson/PartyLesson.vue'),
    },
    {
        // 学习培训->书记轮训
        path: '/train/assembly',
        name: 'SecretaryTrain',
        component: () => import('../views/TrainingAndLearning/SecretaryTrain.vue'),
        meta: {
            keepAlive: true
        }
    }, {
        // 学习培训->学习笔记
        path: '/train/note',
        name: 'StudyNote',
        component: () => import('../views/TrainingAndLearning/StudyNote.vue'),
        meta: {
            keepAlive: true
        },
    },
    {
        // 政治生日->政治生日活动场景
        path: '/life/scene',
        name: 'ActivityScene',
        component: () => import('../views/PoliticalLife/ActivityScene.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 政治生日->党员政治生日
        path: '/life/member',
        name: 'MemberLife',
        component: () => import('../views/PoliticalLife/MemberBirthday.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        // 政治生日->政治生日感言
        path: '/life/recollection',
        name: 'Recollection',
        component: () => import('../views/PoliticalLife/Recollections.vue'),
        meta: {
            keepAlive: true
        }
    },{
        // 党员发展->年度发展党员
        path: '/expand/year',
        name: 'ExpandPartyMember',
        component: () => import('../views/Expand/ExpandMember.vue'),
        meta: {
            keepAlive: true
        }
    },{
        // 党员发展->入党流程
        path: '/expand/process',
        name: 'JoinProcess',
        component: () => import('../views/Expand/JoinProcess.vue'),
        meta: {
            keepAlive: true
        }
    },{
        // 基本组件->文章详情
        path: '/article',
        name: 'Article',
        component: () => import('../views/Base/Article.vue'),
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
    next()
})

router.afterEach(() => {
    // 保证切换路由的时候页面在最顶部
    window.scrollTo({
        top: 0
    })
})

export default router
