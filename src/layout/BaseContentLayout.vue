<template>
<div class="party-container">
  <slot/>
</div>
</template>

<script lang="ts">
/**
 * 名称: 基本内容布局
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "BaseContentLayout",

})
</script>

<style lang="scss" scoped>
.party-container{
  width: 1140px;
  margin: 0 auto;
  padding: 10px;
}
</style>