<template>
<div class="party-member-list">
  <el-row :gutter="20" type="flex">
    <el-col :span="4" v-for="item in lists" :key="item.id">
      <template v-if="item.partyage === null">
        <member-card :id="item.id" :img="item?.picurl" :name="item.name" @click="onCardClick(item.id)"/>
      </template>
      <template v-else>
        <member-card :id="item.id" :img="item?.picurl"
                     :party-year="item.partyage"
                     :date="item.preparetime"
                     :desc="item.info"
                     :name="item.name" @click="onCardClick(item.id)" big/>
      </template>
    </el-col>
  </el-row>
</div>
</template>

<script lang="ts">
/**
 * 名称: 党员列表
 * 说明: 党员列表组件
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
*/
import {defineComponent, PropType, reactive, ref,toRefs} from 'vue';
import {useRouter} from "vue-router";
import {IPartyMember} from "@/models/IPartyMember";
import MemberCard from "@/components/MemberCard.vue";

export default defineComponent({
  name: "MemberList",
  components: {MemberCard},
  emits: ['click'],
  props:{
    lists: {
      type: Array as PropType<[IPartyMember]>
    }
  },
  setup(props,{ emit }){
    // 卡片点击跳转事件
    const onCardClick = (id: string)=>{
      emit('click',id); // 点击事件
      // 跳转到党员详情页面
      // router.push(`/branch/member/${id}`);
    }

    return {
      // ...toRefs(testListRef),
      onCardClick
    }
  }
})
</script>

<style lang="scss" scoped>
.party-pagination{

}
</style>