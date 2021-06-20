<template>
  <base-content-layout>
    <card-view>
      <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName">
        <el-table-column
            prop="date"
            label="年份">
        </el-table-column>
        <el-table-column
            prop="name"
            label="支部名称">
        </el-table-column>
        <el-table-column
            prop="level"
            label="考核等级">
        </el-table-column>
      </el-table>
    </card-view>
  </base-content-layout>
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
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";

export default defineComponent({
  name: "AssessmentLevel",
  components: {CardView, BaseContentLayout},
  setup(){
    const tableData = [{
      date: '2016',
      name: '重庆理工大学两江人工智能学院党总支',
      level: '优秀',
    }, {
      date: '2016',
      name: '王小虎',
      level: '差'
    }, {
      date: '2016',
      name: '王小虎',
      level: '优秀',
    }, {
      date: '2016',
      name: '王小虎',
      level: '优秀'
    }];
    function tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }

    return {
      tableData: ref(tableData),
      tableRowClassName
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