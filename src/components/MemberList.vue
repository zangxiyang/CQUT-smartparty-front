<template>
<div class="party-member-list">
  <el-row :gutter="20" type="flex">
    <el-col :span="3" v-for="item in testList" :key="item.id">
      <member-card :id="item.id" :img="item?.img" :name="item.name"/>
    </el-col>
  </el-row>
  <div class="party-pagination f-jc-c al-c">
    <el-pagination background layout="prev,pager,next" :total="200" class="mt-20"/>
  </div>
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
import {MemberList} from "@/utils/Interfaces";
import MemberCard from "@/components/MemberCard.vue";

export default defineComponent({
  name: "MemberList",
  components: {MemberCard},
  props:{
    lists: {
      type: Array as PropType<MemberList[]>
    }
  },
  setup(){
    //
    const testList = [];
    for (let i = 0 ; i < 30; i ++){
      let tmp = {
        name: `测试姓名${i}`,
        id: `${i}`,
      } as MemberList
      if (i % 2 === 0) tmp["img"] = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
      testList.push(tmp);
    }
    const testListRef = reactive({
      testList: testList
    })
    return {
      ...toRefs(testListRef)
    }
  }
})
</script>

<style lang="scss" scoped>
.party-pagination{

}
</style>