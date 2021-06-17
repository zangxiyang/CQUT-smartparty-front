<template>
<BaseContentLayout>
  党员详情页面测试
</BaseContentLayout>
</template>

<script lang="ts">
/**
 * 名称: 党员详情页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
*/
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";

export default defineComponent({
  name: "MemberDetail",
  components: {BaseContentLayout},
  props:{
    id: String
  },
  setup(props){
    console.log(props.id)
  },
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>