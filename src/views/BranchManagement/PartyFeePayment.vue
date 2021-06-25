<template>
  <select-container-layout v-model="active" title="党支部" @change="selectContainerClick">
    <el-table
        :data="listArr"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="时间"
          width="180">
      </el-table-column>
      <el-table-column
          prop="shouldmoney"
          label="应缴党费"
          width="180">
      </el-table-column>
      <el-table-column
          prop="realmoney"
          label="实缴党费">
      </el-table-column>
    </el-table>
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
 * 名称: 党费缴纳界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import {BranchWorkService} from "@/api";
import {ArticleType} from "@/utils/ConstantMap";
import {IArticleList} from "@/models/IArticleList";
import {IPagination} from "@/models/IPagination";

export default defineComponent({
  name: "PartyFeePayment",
  components: {SelectContainerLayout},
  setup(){
    const active = ref(1);
    const listArr = ref<>([]);
    // 加载方法
    const loadData = (orgId = 1,page= 1): void=>{
      listArr.value = []
      BranchWorkService.getPayment(orgId,page).then(res=>{
        const {list, ...params} = res.page
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

    initLoad(); // 初始化数据加载

    return {
      active,
      listArr,
      currentChange,
      selectContainerClick,
      pagination
    }
  }
})
</script>

<style scoped>

</style>