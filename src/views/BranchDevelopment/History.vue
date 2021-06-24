<template>
  <select-container-layout title="党支部" v-model="active" @change="onSelectChange">
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
import {defineComponent, ref,toRaw} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import TimeLine from "@/components/TimeLine.vue";
import {ITimeLineProps} from '@/models/ITimeLineProps'
import {IPartyHistory} from "@/models/IPartyHistory";
import {BranchHistoryService} from "@/api";
import {useStore} from "vuex";


export default defineComponent({
  name: "History",
  components: {TimeLine, SelectContainerLayout},
  setup(props){
    const active = ref(1);
    const timeLineData = ref<IPartyHistory[]>();
    BranchHistoryService.getHistory(active.value).then(res=>{
      timeLineData.value = res.data as IPartyHistory[]
    })
    const onSelectChange = ()=>{
      timeLineData.value = [] as IPartyHistory[];
      BranchHistoryService.getHistory(active.value).then(res=>{
        console.log(active.value)
        timeLineData.value = res.data as IPartyHistory[];
      })
    }
    return {
      active,
      timeLineData,
      onSelectChange
    }
  },
})
</script>

<style scoped>

</style>