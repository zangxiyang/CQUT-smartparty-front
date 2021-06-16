<template>
<base-content-layout>
  <div>
    测试内容
  </div>
</base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 全体党员页面
 * 说明: 
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
*/
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";

export default defineComponent({
  name: "AllPartyMember",
  components: {BaseContentLayout},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>