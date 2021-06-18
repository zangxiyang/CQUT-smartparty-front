<template>
  <div class="content">
    <video-articles-item  v-for="item in list" :list="item" :key="item.id"></video-articles-item>
    <!--<video-article-item :list="item" v-for="item in list" :key="item.id"/>-->
    <div v-if="list.length%2 > 0">
      <div class="is_odd" v-for="item in (2-list.length%2)" :key="item"></div>
    </div>
  </div>
  <div class="party-pagination f-jc-c al-c">
    <el-pagination background layout="prev,pager,next" :total="200" class="mt-20"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import VideoArticlesItem from './VideoArticlesItem.vue'
import {ColumnProps} from "@/components/VideoArticlesItem.vue";
import VideoArticleItem from "@/components/VideoArticleItem.vue";


interface PartyBranch {
  name: string,   // 支部名称
  value: string   // 向后端请求的值
}
export  interface VideoArticleProp{
  listArr :ColumnProps
}

export default defineComponent({
  name: "VideoArticlesList",
  props:{
    list:{
      type:Object as PropType<VideoArticleProp[]>,
      required:true
    }
  },
  components: {VideoArticlesItem,},
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  justify-items: center;
  text-align: justify;
}
.is_odd{
  content: '';
  width: 430px;
  height: 270px;
  border:1px solid transparent;
  padding: 5px;
  overflow: hidden;

}

</style>