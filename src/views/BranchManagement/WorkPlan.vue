<template>
<select-container-layout title="党支部" v-model="active" @change="selectContainerClick">
  <article-list :list="listArr" @click="click"/>
  <div class="party-pagination f-jc-c al-c">
    <el-pagination background layout="prev,pager,next"
                   :total="pagination.totalCount"
                   :page-size="pagination.pageSize"
                   :current-page="pagination.currPage"
                   :page-count="pagination.totalPage"
                   @current-change="currentChange"
                   class="mt-20"/>
  </div>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 支部工作计划界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import ArticleList from "@/components/ArticleList.vue";
import {useRouter} from "vue-router";
import {BranchWorkService} from "@/api";
import {IPagination} from "@/models/IPagination";
import {IArticleList} from '@/models/IArticleList'

export default defineComponent({
  name: "WorkPlan",
  components: {ArticleList, SelectContainerLayout},
  setup(){
    const active = ref(1);
    const router = useRouter();
    const listArr = ref<IArticleList[]>();

    // 加载方法
    const loadData = (orgId = 1,page= 1): void=>{
      listArr.value = []
      BranchWorkService.getPartyWorkList(orgId,page,6).then(res=>{
        console.log(res)
        const {list, ...params} = res.data
        listArr.value = list     //   填充数据
        pagination.value = params;  //   初始化pagination对象
        // 使页面滑动到最顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    // 构建分页对象
    const pagination = ref<IPagination>({
      totalCount: 0,
      pageSize: 0,
      totalPage: 0,
      currPage: 0
    } as IPagination);

    // 分页被改变页数
    const currentChange = (page: number)=>{
      loadData(active.value,page)
    }
    // 选择支部被改变
    const selectContainerClick = ()=>{
      loadData(active.value)
    }
    // 初始化方法
    const initLoad = () =>{
      loadData(active.value)
    }
    //====================//====================//====================//====================

    initLoad(); // 初始化数据加载

    const click = (id: number)=>{

      router.push(`/article/${id}`);
    }

    return {
      active,
      listArr: ref(listArr),
      click,
      pagination,
      currentChange,
      selectContainerClick
    }
  },
})
</script>

<style scoped>

</style>