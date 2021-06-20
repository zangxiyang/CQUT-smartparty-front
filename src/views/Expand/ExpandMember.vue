<template>
  <select-container-layout title="党支部" v-model="active">
    <div class="header f-jc-sb al-c">
      <el-select v-model="yearActive" placeholder="请选择年份">
        <el-option v-for="item in options" :key="item.val"
                   :label="item.label" :value="item.val"/>
      </el-select>
      <div class="member-num">
        <el-tag effect="dark" type="danger"> 入党人数: <span>102</span></el-tag>
      </div>
    </div>
    <div class="content">
      <member-list :lists="list" @click="click"/>
    </div>
  </select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 年度发展党员
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import MemberList from "@/components/MemberList.vue";
import {IMemberList} from "@/utils/Interfaces";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "ExpandMember",
  components: {MemberList, SelectContainerLayout},
  setup(){
    const active = ref('0');
    const yearActive = ref('2018');
    const router = useRouter();
    const options = [{
      val: '2018',
      label: '2018年'
    },{
      val: '2019',
      label: '2019年'
    },{
      val: '2020',
      label: '2020年'
    },{
      val: '2021',
      label: '2021年'
    },{
      val: '2022',
      label: '2022年'
    },{
      val: '2023',
      label: '2023年'
    },];

    // 成员列表
    const list = [];
    for (let i = 0 ; i < 20; i ++){
      let tmp = {
        name: `测试姓名${i}`,
        id: `${i}`
      } as IMemberList
      if (i % 2 === 0) tmp["img"] = "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
      list.push(tmp);
    }
    const click = (id: string)=>{
      router.push(`/branch/member/${id}`);
    }

    return{
      active,
      yearActive,
      options,
      click,
      list: ref(list)
    }
  }
})
</script>

<style lang="scss" scoped>
.header{
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.content{
  padding-top: 20px;
}
</style>