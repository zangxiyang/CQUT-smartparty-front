<template>
  <el-collapse :model-value="['1','2']">
    <el-collapse-item name="1">
      <template #title>
        <svg style="color: #c22424" t="1623814418072" class="icon mr-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3993" width="200" height="200">
          <path
              d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z"
              p-id="3994"></path>
        </svg>
        <span style="color: #c22424">递交入党申请书</span>
      </template>
      <el-row type="flex" :gutter="20">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="条件" is-popover content="需要满足的条件" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          年满十八岁的中国工人、农民、军人、知识分子和其他社会阶层的先进分子，承认党的纲领和章程，愿意参加党的一个组织并在其中积极工作、执行党的决议和按期缴纳党费。
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" class="mt-10">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="要求" is-popover content="需要满足的要求" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          向工作、学习所在单位党组织提出入党申请;没有工作、学习单位或工作、学习单位未建立党组织的,向居住地党组织提出入党申请;流动人员还可以向单位所在地党组织或单位主管部门党组织、流动党员党组织提出入党申请
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" class="mt-10">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="注意" is-popover content="需要注意的事项" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          本人提出，书面申请。
        </el-col>
      </el-row>
    </el-collapse-item>
    <el-collapse-item name="2">
      <!--党组织派人谈话-->
      <template #title>
        <svg style="color: #c22424" t="1623814418072" class="icon mr-5" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3993" width="200" height="200">
          <path
              d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z"
              p-id="3994"></path>
        </svg>
        <span style="color: #c22424">党组织派人谈话</span>
      </template>
      <el-row type="flex" :gutter="20">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="时间" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          收到入党申请书后的一个月内
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" class="mt-10">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="主体" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          党支部书记、副书记或者组织委员
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" class="mt-10">
        <el-col :span="2">
          <div class="col">
            <maxer-badge :right="10" title="内容" color="danger"/>
          </div>
        </el-col>
        <el-col :span="22">
          了解入党申请人的基本情况；介绍入党条件和程序；加强教育引导。
        </el-col>
      </el-row>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
/**
 * 名称: 入党流程 -> 申请入党面板
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent} from 'vue';
import MaxerBadge from "@/components/MaxerBadge.vue";

export default defineComponent({
  name: "Apply",
  components: {MaxerBadge}
})
</script>

<style scoped>

</style>