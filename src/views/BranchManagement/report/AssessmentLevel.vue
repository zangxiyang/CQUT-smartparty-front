<template>
  <select-container-layout v-model="active" title="党支部"  @change="selectContainerClick">
    <el-table
        :data="listArr"
        style="width: 100%"
        :row-class-name="tableRowClassName">
      <el-table-column
          prop="date"
          label="时间">
      </el-table-column>
      <el-table-column
          prop="orgName"
          label="支部名称">
      </el-table-column>
      <el-table-column
          prop="level"
          label="考核等级">
        <template #default="scope">
          {{level(scope.row.level)}}
        </template>
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
 * 名称: 支部年度考核等级界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import {levelMap} from "@/utils/ConstantMap";
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import {BranchWorkService} from "@/api";
import {IPagination} from "@/models/IPagination";

export default defineComponent({
  name: "AssessmentLevel",
  components: {SelectContainerLayout},
  setup(){

    // 表格class样式修改
    function tableRowClassName({row}) {
      if (row.level === 3) {
        return 'warning-row';
      } else if (row.level === 0) {
        return 'success-row';
      }
    }
    // 表格level映射
    function level(val: number):string{
      return levelMap(val);
    }
    const active = ref(1);
    const listArr = ref<>([]);
    // 加载方法
    const loadData = (orgId = 1,page= 1): void=>{
      listArr.value = []
      BranchWorkService.getBranchYearLevelList(orgId,page).then(res=>{
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

    initLoad(); // 初始化数据加载

    return {
      active,
      listArr,
      currentChange,
      selectContainerClick,
      pagination,
      tableRowClassName,
      level
    }
  }
})
</script>

<style lang="scss">
.el-table{
  .warning-row{
    background-color: #ffcbcb;
  }
  .success-row{
    background-color: #f0f9eb;
  }
}

</style>