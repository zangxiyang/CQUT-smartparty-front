<template>
  <div class="member-card flex f-col mb-10 cur-p">
    <div class="header">
      <el-image :src="img" fit="fill" v-if="img != null" style="height: 100%"/>
      <el-image :src="require('@/assets/img/member.png')" fit="fill" v-else style="height: 100%"/>
    </div>
    <div class="name f-jc-c al-c">
      {{name}}
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 头像卡片组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
 */
import {defineComponent} from 'vue';

export default defineComponent({
  name: "MemberCard",
  props:{
    name: String,
    img: String,
    id: String
  }
})
</script>

<style lang="scss" scoped>
.member-card{
  overflow: hidden;
  border: 1px solid #ebeef5;
  align-content: flex-start;
  .header{
    height: 130px;
    width: 100%;
    overflow: hidden;
  }
  .name{
    padding: 2px;
    user-select: none;
  }
}
</style>