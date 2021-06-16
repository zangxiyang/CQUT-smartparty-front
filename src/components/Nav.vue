<template>
  <div class="menu">
    <el-menu
        :default-active="activeIndex"
        class="menu-nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#A51211"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-submenu index="1">
        <template #title>党务工作</template>
        <el-menu-item index="1-1">党支部委员会</el-menu-item>
        <el-menu-item index="1-2">全体党员信息</el-menu-item>
        <el-menu-item index="1-3">支部工作计划</el-menu-item>
        <el-menu-item index="1-3">支部工作总结</el-menu-item>
        <el-submenu index="1-4">
          <template #title>书记述职</template>
          <el-menu-item index="1-4-1">述职报告</el-menu-item>
          <el-menu-item index="1-4-2">支部年度考核等级</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-5">书记讲党课</el-menu-item>
        <el-menu-item index="1-5">党组织关系转接</el-menu-item>
        <el-menu-item index="1-5">党费缴纳</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title>三会一课</template>
        <el-menu-item index="2-1">党员大会</el-menu-item>
        <el-menu-item index="2-2">党支部委员会会议</el-menu-item>
        <el-menu-item index="2-3">党课</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>党日活动</template>
        <el-menu-item index="3-1">主题党日</el-menu-item>
        <el-menu-item index="3-2">民主评议</el-menu-item>
        <el-menu-item index="3-3">志愿活动</el-menu-item>
        <el-menu-item index="3-4">重温入党誓词</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title>学习培训</template>
        <el-menu-item index="4-1">书记轮训</el-menu-item>
        <el-menu-item index="4-2">学习笔记</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">支部发展</el-menu-item>
      <el-submenu index="6">
        <template #title>政治生日</template>
        <el-menu-item index="6-1">政治生日活动场景</el-menu-item>
        <el-menu-item index="6-2">政治生日感言</el-menu-item>
        <el-menu-item index="6-3">党员政治生日</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template #title>党员发展</template>
        <el-menu-item index="7-1">入党誓言</el-menu-item>
        <el-menu-item index="7-2">入党流程</el-menu-item>
        <el-menu-item index="7-3">年度发展党员</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">支部大数据</el-menu-item>
      <div class="menu-bg"></div>
    </el-menu>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import {useRouter} from "vue-router"

export default defineComponent({
  setup() {
    const activeIndex = ref('1-1')
    const router = useRouter()
    const handleSelect = (key: string, keyPath: string) => {
      console.log(key, keyPath)
      router.push(key)
    }
    return {
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style lang="scss" scoped>
</style>