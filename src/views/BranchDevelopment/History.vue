<template>
  <select-container-layout title="党支部" v-model="active">
    <TimeLine/>
  </select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 发展历程界面
 * 说明: 
 * 作者: Seale
 * 时间: 2021/6/21
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import TimeLine from "@/components/TimeLine.vue";


export default defineComponent({
  name: "History",
  components: {TimeLine, SelectContainerLayout},
  setup(props){
    const active = ref('0');

    return {
      active
    }
  },
})
</script>

<style scoped>

</style>