<template>
<div class="party-member-list">
  <el-row :gutter="20" type="flex">
    <el-col :span="3">
      <div class="member-card flex f-col f-jc-c">
        <div class="header">
          <img src="../assets/img/member.png" alt="">
        </div>
        <div class="name">
          姓名
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="member-card flex f-col f-jc-c">
        <div class="header">
          <img src="../assets/img/member.png" alt="">
        </div>
        <div class="name">
          姓名
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="member-card flex f-col f-jc-c">
        <div class="header">
          <img src="../assets/img/member.png" alt="">
        </div>
        <div class="name">
          姓名
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script lang="ts">
/**
 * 名称: 党员列表
 * 说明: 党员列表组件
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "MemberList",
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.member-card{
  overflow: hidden;
  border: 1px solid #ebeef5;
  img{
    width: 100%;
  }
}
</style>