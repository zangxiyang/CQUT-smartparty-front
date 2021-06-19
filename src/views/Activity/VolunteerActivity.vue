<template>
  <select-container-layout>
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
 * 名称: 志愿活动界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import VideoArticlesItem from "@/components/VideoArticlesItem.vue";

export default defineComponent({
  name: "VolunteerActivity",
  components: {VideoArticlesItem, SelectContainerLayout},
  setup(){
    const listArr =[{
      id:'1',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      tag:'志愿活动',
      title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
      narrator:"什么什么部门",
      time: '2021年5月14日/15日 19:30'
    },{
      id:'2',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      tag:'志愿活动',
      title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
      narrator:"什么什么部门",
      time: '2021年5月14日/15日 19:30'
    },
      {
        id:'3',
        href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
        tag:'志愿活动',
        title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
        narrator:"谁谁谁",
        time: '2021年5月14日/15日 19:30'
      }]

    return {listArr}
  }
})
</script>

<style scoped>

</style>