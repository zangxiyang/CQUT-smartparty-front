<template>
  <select-container-layout title="党支部" v-model="active">
    <el-row :gutter="20" type="flex">
      <el-col v-for="item in listArr" :key="item.id" :span="12">
        <video-articles-item :video="false" :list="item" style="margin: 0 auto; margin-bottom: 20px"/>
      </el-col>
    </el-row>
    <el-pagination background layout="prev,pager,next" :total="200" class="f-jc-c al-c mt-20"/>
  </select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 重温入党誓词界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import VideoArticlesItem from "@/components/VideoArticlesItem.vue";


export default defineComponent({
  name: "ReviewParty",
  components: {VideoArticlesItem, SelectContainerLayout},
  setup(){
    const active = ref('0');
    const listArr =[{
      id:'1',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      tag:'重温入党誓词',
      title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
      narrator:"什么什么部门",
      time: '2021年5月14日/15日 19:30'
    },{
      id:'2',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      tag:'重温入党誓词',
      title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
      narrator:"什么什么部门",
      time: '2021年5月14日/15日 19:30'
    },
      {
        id:'3',
        href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
        tag:'重温入党誓词',
        title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
        narrator:"谁谁谁",
        time: '2021年5月14日/15日 19:30'
      }]

    return {
      listArr: ref(listArr),
      active
    }
  }
})
</script>

<style scoped>

</style>