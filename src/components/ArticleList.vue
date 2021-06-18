<template>
  <div class="content">
    <article-item  v-for="(item,index) in list" :list="item" :key="index"></article-item>
  </div>
  <div class="party-pagination f-jc-c al-c">
    <el-pagination background layout="prev,pager,next" :total="200" class="mt-20"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import ArticleItem from './ArticleItem.vue'
import {ArticlelistProps} from '@/models/IArticleProps'


interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}


export default defineComponent({
  name: "ArticleList",
  props:{
    list:{
      type:Object as PropType<ArticlelistProps[]>,
      required:true
    }
  },
  components: {ArticleItem},
  setup(){

    return {
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
  margin: 0 15px;
}

</style>