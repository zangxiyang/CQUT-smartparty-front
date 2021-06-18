<template>
  <base-content-layout>
    <select-container title="党支部" :items="parties" v-model="test"/>
    <card-view>
      <article-list :list="listArr"></article-list>
    </card-view>
  </base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 学习培训->书记轮训页面
 * 说明:
 * 作者: xiaolifeipiao
 * 时间: 2021/6/16
 * 版本: V1
 */
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import SelectContainer from "@/components/SelectContainer.vue";
import CardView from "@/components/CardView.vue";
import ArticleList from "@/components/ArticleList.vue";

// import {PartyBranch} from "@/utils/Interfaces";

interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}

export default defineComponent({
  name: "SecretaryTrain",
  components: {ArticleList, CardView, SelectContainer, BaseContentLayout},
  setup(){
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
      listArr
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
      test: '0'
    }
  }
})
</script>

<style scoped lang="scss">
.content{
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content:space-around;
  align-items:center;
}

</style>