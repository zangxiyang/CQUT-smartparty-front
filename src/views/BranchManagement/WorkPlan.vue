<template>
<select-container-layout title="党支部" v-model="active">
  <article-list :list="listArr"/>
</select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 支部工作计划界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import ArticleList from "@/components/ArticleList.vue";

export default defineComponent({
  name: "WorkPlan",
  components: {ArticleList, SelectContainerLayout},
  setup(){
    const active = ref('0');
    const listArr =[{
      id:'1',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      title: '清华大学举行“光荣在党50年”纪念章颁发仪式 ',
      content:"16日上午，清华大学“光荣在党50年” 纪念章集中颁发仪式在综合体育馆举行。校党委书记陈旭发表讲话，校党委副书记、校长邱勇主持仪式。学校领导班子全体成员、674名“光荣在党50年”老党员代表等出席仪式。",
      time: '2021年5月14日/15日 19:30'
    },{
      id:'2',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      title: '清华大学举行“光荣在党50年”纪念章颁发仪式',
      content:"16日上午，清华大学“光荣在党50年” 纪念章集中颁发仪式在综合体育馆举行。校党委书记陈旭发表讲话，校党委副书记、校长邱勇主持仪式。学校领导班子全体成员、674名“光荣在党50年”老党员代表等出席仪式。",
      time: '2021年5月14日/15日 19:30'
    },{
      id:'3',
      href:'https://z3.ax1x.com/2021/06/17/2zmvy6.jpg',
      title: '我叫江小白生活很简单 asfasfasdfasdfasdfasdfwefv gdfg sdgfhmn fgh jmghjm,ghdgf ',
      content:"16日上午，清华大学“光荣在党50年” 纪念章集中颁发仪式在综合体育馆举行。校党委书记陈旭发表讲话，校党委副书记、校长邱勇主持仪式。学校领导班子全体成员、674名“光荣在党50年”老党员代表等出席仪式。",
      time: '2021年5月14日/15日 19:30'
    }]

    return {
      active,
      listArr: ref(listArr)
    }
  },
})
</script>

<style scoped>

</style>