<template>
  <base-content-layout>
    <select-container title="党支部" :items="parties" v-model="test" @change="testChange"/>
    <card-view>
      <member-list :lists="list" @click="click"/>
    </card-view>
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
import {defineComponent, reactive, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import SelectContainer from "@/components/SelectContainer.vue";
import CardView from "@/components/CardView.vue";
import MemberList from "@/components/MemberList.vue";
import {IMemberList} from "@/utils/Interfaces";

import {PartyBranch} from "@/utils/Interfaces";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "AllPartyMember",
  components: {MemberList, CardView, SelectContainer, BaseContentLayout},
  setup(){
    const test = ref('0');
    const testChange = ()=>{
      console.log(`当前选中的项：${test.value}`);
    }
    const router = useRouter()

    // 成员列表
    let list = [];
    for (let i = 0 ; i < 20; i ++){
      let tmp = {
        name: `测试姓名${i}`,
        id: `${i}`,
      } as IMemberList
      if (i % 2 === 0) tmp["img"] = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
      list.push(tmp);
    }
    list = ref(list);
    const click = (id: string)=>{
      alert(id);
      router.push(`/branch/member/${id}`);
    }


    return{
      testChange,test,list,
      click
    }
  },
  data() {
    return {
      parties: [
        {
          name: '测试党支部',
          value: '0'
        },
        {
          name: '测试党支部1',
          value: '1'
        },
        {
          name: '测试党支部2',
          value: '2'
        }, {
          name: '测试党支部3',
          value: '3'
        }, {
          name: '测试党支部4',
          value: '4'
        },
        {
          name: '测试党支部4',
          value: '5'
        },
        {
          name: '测试党支部4',
          value: '6'
        },
        {
          name: '测试党支部4',
          value: '7'
        },
        {
          name: '测试党支部4',
          value: '8'
        },
        {
          name: '测试党支部4',
          value: '9'
        },
        {
          name: '测试党支部4',
          value: '10'
        },
      ] as PartyBranch[],
    }
  }
})
</script>

<style scoped>

</style>