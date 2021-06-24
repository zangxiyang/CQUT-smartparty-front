<template>
  <select-container-layout v-model="active" title="党支部" @change="selectContainerClick">
    <el-row :gutter="20" type="flex">
      <el-col v-for="item in listArr" :key="item.id" :span="12">
        <video-articles-item :list="item" style="margin: 0 auto; margin-bottom: 20px" @click="click" tag="党员大会"/>
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
 * 名称: 党员大会页面
 * 说明:
 * 作者: xiaolifeipiao
 * 时间: 2021/6/16
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import SelectContainer from "@/components/SelectContainer.vue";
import CardView from "@/components/CardView.vue";
import VideoArticlesList from "@/components/VideoArticlesList.vue";
import VideoArticlesItem from "@/components/VideoArticlesItem.vue";
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import {IArticleList} from "@/models/IArticleList";
import {useRouter} from "vue-router";
import {BranchWorkService} from "@/api";
import {ArticleType} from "@/utils/ConstantMap";
import {IPagination} from "@/models/IPagination";

// import {PartyBranch} from "@/utils/Interfaces";

interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}

export default defineComponent({
  name: "Assembly",
  components: {VideoArticlesItem, SelectContainerLayout},
  setup(){
    const active = ref(1);
    const listArr = ref<IArticleList[]>();
    const router = useRouter();
    // 加载方法
    const loadData = (orgId = 1,page= 1): void=>{
      listArr.value = []
      BranchWorkService.getPartyWorkList(orgId,ArticleType.PARTY_MEETING,page,6).then(res=>{
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
  },
  data() {
    return {
      parties: [
        {
          name: '测试党支部',
          value: '0'
        },
        {
          name: '测试党支部1',
          value: '1'
        },
        {
          name: '测试党支部2',
          value: '2'
        }, {
          name: '测试党支部3',
          value: '3'
        }, {
          name: '测试党支部4',
          value: '4'
        },
        {
          name: '测试党支部4',
          value: '5'
        },
        {
          name: '测试党支部4',
          value: '6'
        },
        {
          name: '测试党支部4',
          value: '7'
        },
        {
          name: '测试党支部4',
          value: '8'
        },
        {
          name: '测试党支部4',
          value: '9'
        },
        {
          name: '测试党支部4',
          value: '10'
        },
      ] as PartyBranch[],
      test: '0'
    }
  }
})
</script>

<style scoped lang="scss">
.content{
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content:space-around;
  align-items:center;
}

</style>