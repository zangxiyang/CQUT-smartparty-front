<template>
<base-content-layout>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="year"
        label="年份"
        width="180">
    </el-table-column>
    <el-table-column
        prop="duePay"
        label="应缴党费"
        width="180">
    </el-table-column>
    <el-table-column
        prop="actualPay"
        label="实缴党费">
    </el-table-column>
  </el-table>
</base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 党费缴纳界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
*/
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";

export default defineComponent({
  name: "PartyFeePayment",
  components: {BaseContentLayout},
  data() {
    return {
      tableData: [{
        year: '2016-05-02',
        duePay: '王小虎',
        actualPay: '上海市普陀区金沙江路 1518 弄'
      }, {
        year: '2016-05-04',
        duePay: '王小虎',
        actualPay: '上海市普陀区金沙江路 1517 弄'
      }, {
        year: '2016-05-01',
        duePay: '王小虎',
        actualPay: '上海市普陀区金沙江路 1519 弄'
      }, {
        year: '2016-05-03',
        duePay: '王小虎',
        actualPay: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
})
</script>

<style scoped>

</style>