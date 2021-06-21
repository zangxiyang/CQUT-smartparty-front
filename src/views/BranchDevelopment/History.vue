<template>
  <select-container-layout title="党支部" v-model="active">
    <TimeLine :list="timeLineData"/>
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
import {ITimeLineProps} from '@/models/ITimeLineProps'


export default defineComponent({
  name: "History",
  components: {TimeLine, SelectContainerLayout},
  setup(props){
    const active = ref('0');
    const timeLineData = [];
    for (let i = 0 ; i < 7; i ++){
      const tmp = {
        date: `2021-06-0${i}`,
        title: `测试标题内容${i}`,
        desc: "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
        imgUrl: 'https://www.sf-express.com/cn/sc/download/SF-CN-DH-3.jpg'
      } as ITimeLineProps
      timeLineData.push(tmp);
    }
    return {
      active,
      timeLineData: ref(timeLineData)
    }
  },
})
</script>

<style scoped>

</style>