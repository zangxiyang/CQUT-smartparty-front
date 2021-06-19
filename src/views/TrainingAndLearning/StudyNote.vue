<template>
<select-container-layout>
  <el-row type="flex" :gutter="10">
    <el-col :span="6" v-for="item in list" :key="item.title">
      <note-card :title="item.title" :img="item.img"/>
    </el-col>
  </el-row>
  <el-pagination background layout="prev,pager,next" :total="200" class="f-jc-c al-c mt-20"/>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 学习笔记界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import NoteCard from "@/components/NoteCard.vue";

export default defineComponent({
  name: "StudyNote",
  components: {NoteCard, SelectContainerLayout},
  setup(){
    const activeBranch = ref("0");
    let list = [];
    for (let i = 0 ; i < 12; i ++){
      const tmp = {
        img: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        title: `测试名字${i}`
      }
      list.push(tmp);
    }
    list = ref(list);


    return {
      activeBranch,list
    }
  },
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>