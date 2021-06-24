<template>
  <select-container-layout v-model="active" title="党支部" @change="selectContainerClick">
    <el-row :gutter="20" type="flex">
      <el-col v-for="item in listArr" :key="item.id" :span="12">
        <video-articles-item :list="item" style="margin: 0 auto; margin-bottom: 20px" @click="click" tag="党支部委员会议"/>
      </el-col>
    </el-row>
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
 * 名称: 党课界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import VideoArticlesItem from "@/components/VideoArticlesItem.vue";
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import {IArticleList} from "@/models/IArticleList";
import {useRouter} from "vue-router";
import {BranchWorkService} from "@/api";
import {ArticleType} from "@/utils/ConstantMap";
import {IPagination} from "@/models/IPagination";

export default defineComponent({
  name: "PartyLesson",
  components: {SelectContainerLayout, VideoArticlesItem},
  setup(){
    const active = ref(1);
    const listArr = ref<IArticleList[]>();
    const router = useRouter();
    // 加载方法
    const loadData = (orgId = 1,page= 1): void=>{
      listArr.value = []
      BranchWorkService.getPartyWorkList(orgId,ArticleType.PARTY_LESSON,page,6).then(res=>{
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
      listArr,
      click,
      currentChange,
      selectContainerClick,
      pagination
    }
  }
})
</script>

<style scoped>

</style>