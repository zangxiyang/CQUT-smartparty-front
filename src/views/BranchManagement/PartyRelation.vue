<template>
<select-container-layout title="党支部" v-model="activeBranch">
  <el-table
      row-key="date"
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="date"
        label="日期"
        sortable
        column-key="date"
    >
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        >
    </el-table-column>
    <el-table-column
        prop="tag"
        label="状态"
        :filters="[{ text: '转入', value: '转入' }, { text: '转出', value: '转出' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
      <template #default="scope">
        <el-tag
            effect="dark"
            :type="scope.row.tag === '转入' ? 'success' : 'danger'"
            disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 党组织关系转接
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";

const table = [{
  date: '2016-05-02',
  name: '王小虎',
  tag: '转入'
}, {
  date: '2016-05-04',
  name: '王小虎',
  tag: '转出'
}, {
  date: '2016-05-01',
  name: '王小虎',
  tag: '转入'
}, {
  date: '2016-05-03',
  name: '王小虎',
  tag: '转出'
}];

export default defineComponent({
  name: "PartyRelation",
  components: {SelectContainerLayout},
  setup(){
    const activeBranch = ref("0");
    const tableData = ref(table);
    return {activeBranch,tableData}
  }
})
</script>

<style scoped>

</style>