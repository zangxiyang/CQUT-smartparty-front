<template>
<div class="party-member-list">
  <el-row :gutter="20" type="flex">
    <el-col :span="3">
      <member-card name="测试姓名" id="1"/>
    </el-col>
    <el-col :span="3">
      <member-card name="测试姓名" id="1"/>
    </el-col>
    <el-col :span="3">
      <member-card name="测试姓名" id="1" img="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
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
import {defineComponent, PropType} from 'vue';
import {MemberList} from "@/utils/Interfaces";
import MemberCard from "@/components/MemberCard.vue";

export default defineComponent({
  name: "MemberList",
  components: {MemberCard},
  props:{
    lists: {
      type: Array as PropType<MemberList[]>
    }
  },
  setup(){
    //
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