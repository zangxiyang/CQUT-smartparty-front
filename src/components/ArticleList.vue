<template>
  <div class="content">
    <article-item  v-for="(item,index) in list"
                   :list="item" :key="index" @click="onArticleItemClick(item.id)"></article-item>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import ArticleItem from './ArticleItem.vue'
import {IArticleList} from "@/models/IArticleList";


interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}


export default defineComponent({
  name: "ArticleList",
  emits: ['click'],
  props:{
    list:{
      type:Object as PropType<IArticleList[]>,
      required:true
    }
  },
  components: {ArticleItem},
  setup(props, { emit }){
    const onArticleItemClick = (id: number)=>{
      emit('click', id)
    }
    return {
      onArticleItemClick
    }
  }
})
</script>

<style scoped lang="scss">
.content{
  margin: 0 15px;
}

</style>