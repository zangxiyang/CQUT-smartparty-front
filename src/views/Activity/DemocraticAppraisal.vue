<template>
<select-container-layout>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        label="日期"
        width="180">
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
        label="评议标题">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            可能是关于这个会议的一些描述
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
            size="mini"
            type="danger"
            @click="watchResult(scope.$index, scope.row)">查看结果</el-button>
      </template>
    </el-table-column>
  </el-table>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 民主评议界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";

export default defineComponent({
  name: "DemocraticAppraisal",
  components: {SelectContainerLayout},
  setup(){
    const tableData = ref([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]);
    const watchResult = (index,row)=>{
      console.log(index)
      console.log(row)
    }
    return {
      tableData,watchResult
    }
  },
})
</script>

<style scoped>

</style>