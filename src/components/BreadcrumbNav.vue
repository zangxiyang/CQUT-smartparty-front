<!-- todo
<template>
  <div class="bread-nav">
    <base-content-layout class="none-select">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
      {{vuexTestVar}}
    </base-content-layout>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 面包屑导航
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
*/
import {computed, defineComponent, getCurrentInstance, reactive, toRefs, onBeforeMount, ref} from 'vue';
import {useRouter,useRoute} from "vue-router";
import {useStore} from "vuex";
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import {BreadNav} from "@/utils/Interfaces";

export default defineComponent({
  name: "BreadcrumbNav",
  components: {BaseContentLayout},
  setup(props,context){
    const router = useRouter();
    const route = useRoute();
    const instance = getCurrentInstance();
    const store = useStore();
    router.beforeEach((to, from, next) => {
      const breadNav = store.state.vuexBreadNav;
      // 首先判断是否为空
      if (breadNav.length !== 0){
        // 当前的nav数组不为空
        console.log(breadNav)
        breadNav.forEach((v: BreadNav)=>{

        })
      }
      next();
    });

    const breadNavList = reactive(computed(()=>store.state.vuexBreadNav));
    return {
      ...toRefs(breadNavList)
    }
  }
})
</script>

<style scoped>

</style>-->
