<template>
  <nav>
    <div class="maxer-container mb-20">
      <el-menu
          :default-active="activeIndex"
          class="menu-nav"
          mode="horizontal"
          @select="handleSelect"
          background-color="#A51211"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
      >
        <el-submenu index="1">
          <template #title>党务工作</template>
          <el-menu-item index="1-1" route="/">全体党员信息</el-menu-item>
          <el-menu-item index="1-2" :route="{name: 'WorkPlan'}">支部工作计划</el-menu-item>
          <el-menu-item index="1-3" :route="{name: 'WorkSummary'}">支部工作总结</el-menu-item>
          <el-submenu index="1-4">
            <template #title>书记述职</template>
            <el-menu-item index="1-4-1" :route="{name: 'SecretaryReport'}">述职报告</el-menu-item>
            <el-menu-item index="1-4-2" :route="{name: 'AssessmentLevel'}">支部年度考核等级</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-5" :route="{name: 'SecretaryLesson'}">书记讲党课</el-menu-item>
          <el-menu-item index="1-6" :route="{name: 'partyRelation'}">党组织关系转接</el-menu-item>
          <el-menu-item index="1-7" :route="{name: 'PartyFeePayment'}">党费缴纳</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template #title>三会一课</template>
          <el-menu-item index="2-1" :route="{name: 'Assembly'}">党员大会</el-menu-item>
          <el-menu-item index="2-2" :route="{name: 'BranchMeeting'}">党支部委员会会议</el-menu-item>
          <el-menu-item index="2-3" :route="{name: 'PartyLesson'}">党课</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template #title>党日活动</template>
          <el-menu-item index="3-1" :route="{name: 'PartyDay'}">主题党日</el-menu-item>
          <el-menu-item index="3-2" :route="{name: 'DemocraticAppraisal'}">民主评议</el-menu-item>
          <el-menu-item index="3-3" :route="{name: 'VolunteerActivity'}">志愿活动</el-menu-item>
          <el-menu-item index="3-4" :route="{name: 'ReviewParty'}">重温入党誓词</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template #title>学习培训</template>
          <el-menu-item index="4-1" :route="{name: 'SecretaryTrain'}">书记轮训</el-menu-item>
          <el-menu-item index="4-2" :route="{name: 'StudyNote'}">学习笔记</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template #title>支部发展</template>
          <el-menu-item index="5-1">发展历程</el-menu-item>

        </el-submenu>
        <el-submenu index="6">
          <template #title>政治生日</template>
          <el-menu-item index="6-1" :route="{name: 'ActivityScene'}">政治生日活动场景</el-menu-item>
          <el-menu-item index="6-2" :route="{name: 'Recollection'}">政治生日感言</el-menu-item>
          <el-menu-item index="6-3" :route="{name: 'MemberLife'}">党员政治生日</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template #title>党员发展</template>
          <el-menu-item index="7-1">入党誓言</el-menu-item>
          <el-menu-item index="7-2">入党流程</el-menu-item>
          <el-menu-item index="7-3" :route="{name: 'ExpandPartyMember'}">年度发展党员</el-menu-item>
        </el-submenu>
        <a :href="bigDataUrl" class="el-menu-item"
           style="border-bottom-color: transparent; color: rgb(255, 255, 255);"
            :style="navLastItemActive"
            @mouseenter="toDataScreen(0)" @mouseleave="toDataScreen(1)">
          支部大数据</a>
        <div class="menu-bg"></div>
      </el-menu>
    </div>
  </nav>

</template>

<script lang="ts">
import {defineComponent, ref, reactive} from "vue"
import {clearPending} from "@/utils/https";
// import {useRouter} from "vue-router"

export default defineComponent({
  setup() {
    const activeIndex = ref('1-1')


    // 菜单选择处理器
    const handleSelect = (key: string, keyPath: string) => {
      console.log(key, keyPath)
      // router.push(key)
    }
    const navLastItemActive = ref({});
    // 处理支部大数据最后一项
    const toDataScreen = (flag: number)=>{
      if (flag === 1){
        // 当前为移出状态
        navLastItemActive.value = {
          backgroundColor: 'rgb(165, 18, 17)'
        }
      }else if (flag === 0){
        // 当前出鼠标进入
        navLastItemActive.value = {
          backgroundColor: 'rgb(132,14,14)'
        }
      }
    }

    return {
      activeIndex,
      handleSelect,
      toDataScreen,
      navLastItemActive,
      bigDataUrl: process.env.VUE_APP_BIGDATA
    }
  }
})
</script>

<style lang="scss" scoped>
nav {
  background: rgb(165, 18, 17);

  ::v-deep {
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }

    .el-submenu .el-submenu__title i {
      color: #fff;
    }

  }
}
</style>
<style>
.el-popper .el-submenu .el-submenu__title i {
  color: #fff;
}
</style>