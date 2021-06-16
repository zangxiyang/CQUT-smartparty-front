<template>
  <base-content-layout>
    <select-container title="党支部" :items="parties" v-model="test"/>
    <card-view>
      <member-list/>
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
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import SelectContainer from "@/components/SelectContainer.vue";
import CardView from "@/components/CardView.vue";
import MemberList from "@/components/MemberList.vue";

// import {PartyBranch} from "@/utils/Interfaces";

interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}

export default defineComponent({
  name: "AllPartyMember",
  components: {MemberList, CardView, SelectContainer, BaseContentLayout},
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
      test: '0'
    }
  }
})
</script>

<style scoped>

</style>