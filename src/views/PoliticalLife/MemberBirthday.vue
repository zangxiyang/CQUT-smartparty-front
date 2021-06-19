<template>
<select-container-layout title="党支部">
  <member-list @click="click" :lists="list"/>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 党员政治生日
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import MemberList from "@/components/MemberList.vue";
import {IMemberList} from "@/utils/Interfaces";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "MemberBirthday",
  components: {MemberList, SelectContainerLayout},
  setup(props){
    const router = useRouter();
    // 成员列表
    let list = [];
    for (let i = 0 ; i < 20; i ++){
      let tmp = {
        name: `测试姓名${i}`,
        id: `${i}`,
        year: String(i),
        info: '于2015-12-02入党'
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
      click,list
    }
  },
})
</script>

<style scoped>

</style>