<template>
<base-content-layout>
  <SelectContainer :title="title" :items="parties" v-model="active"></SelectContainer>
  <card-view>
    <slot/>
  </card-view>
</base-content-layout>
</template>

<script lang="ts">
import {defineComponent, ref,computed} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";
import {PartyBranch} from "@/utils/Interfaces";
import SelectContainer from "@/components/SelectContainer.vue";


export default defineComponent({
  name: "SelectContainerLayout",
  components: {SelectContainer, CardView, BaseContentLayout},
  props:{
    title: String,
    modelValue: String   // 当前选中值
  },
  setup(props,{emit}){
    let parties = []
    for (let i = 0 ; i < 10; i++){
      const tmp = {
        name: `测试党支部${i}`,
        value: `${i}`
      } as PartyBranch
      parties.push(tmp);
    }
    parties = ref(parties);
    const active = ref(computed({
      get: ()=> props.modelValue || "",
      set: (v)=> emit('update:modelValue',v)
    }));
    return {
      parties,active
    }
  }
})
</script>

<style scoped>

</style>