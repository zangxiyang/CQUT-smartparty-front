<template>
<base-content-layout>
  <SelectContainer :title="title" :items="vuexBranches" v-model="active" @change="$emit('change')"></SelectContainer>
  <card-view>
    <slot/>
  </card-view>
</base-content-layout>
</template>

<script lang="ts">
import {defineComponent, ref,computed} from 'vue';
import {useStore} from "vuex";
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";
import {PartyBranch} from "@/utils/Interfaces";
import SelectContainer from "@/components/SelectContainer.vue";


export default defineComponent({
  name: "SelectContainerLayout",
  emits: ['change','update:modelValue'],
  components: {SelectContainer, CardView, BaseContentLayout},
  props:{
    title: String,
    modelValue: [String,Number]   // 当前选中值
  },
  setup(props,{emit}){
    const store = useStore();
    const active = ref(computed({
      get: ()=> props.modelValue || "",
      set: (v)=> emit('update:modelValue',v)
    }));
    return {
      active
    }
  }
})
</script>

<style scoped>

</style>