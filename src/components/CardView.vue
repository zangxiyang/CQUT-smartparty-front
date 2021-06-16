<template>
  <div class="card-view">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 卡片布局
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "CardView",
})
</script>

<style lang="scss" scoped>
  .card-view{
    box-sizing: border-box;
    min-height: 400px;
    margin-top: 10px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ededed;
    padding: 20px;

  }
</style>