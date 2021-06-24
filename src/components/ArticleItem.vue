<template>
<div class="article" >
  <p class="bt">{{list.title}}</p>
  <div class="article_content">
    <div class="img">
      <img :src="list.picurl" alt="">
      <div class="sj">
        <p>{{day}}</p>
        <span>{{year_month}}</span>
      </div>
    </div>
    <div class="pre">
      <p class="zy">
       {{list.remark}}
      </p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRaw} from "vue";
import {useRouter} from "vue-router";
import {IArticleList} from "@/models/IArticleList";

export default defineComponent({
  name: "ArticleItem",
  props:{
    list:{
      type:Object as PropType<IArticleList>,
      required:true
    }
  },
  setup(props){
    // 处理日期
    const date = toRaw(props.list.time).split('-');
    const day = ref(date[2]);
    const year_month = ref(`${date[0]}.${date[1]}`);
    return{
      day,year_month
    }
  }
})
</script>

<style scoped lang="scss">
.article{
  font-family: "SourceSansPro-Regular", "微软雅黑",sans-serif;
  color: #000;
  height: 230px;
  cursor: pointer;
  -webkit-text-size-adjust: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 10px;
  position: relative;
  .bt{
    font-size: 16px;
    margin-bottom: 5px;
    transition: All 0.5s ease;
    -webkit-transition: All 0.5s ease;
    -moz-transition: All 0.5s ease;
    -o-transition: All 0.5s ease;
    font-weight: bold;
  }
  .bt:hover{
      color: #AC633B;
  }
  .article_content{
    display: flex;
    .img{
      width: 280px;
      height: 180px;
      overflow: hidden;
      z-index: 1;
      left: 0;
      right: auto;
      top: 0;
      bottom: auto;
      display: block;
      background: #e9ebf9;
      margin-right: 20px;
      float: left;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        transition: All 0.5s ease;
        -webkit-transition: All 0.5s ease;
        -moz-transition: All 0.5s ease;
        -o-transition: All 0.5s ease;
      }
      img:hover{
          transform: scale(1.4);
      }
      .sj{
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: 80px;
        height: 50px;
        background: url("../assets/img/img60.png") no-repeat;
        background-size: 100%, 100%;
        color: #fff;
        opacity: .8;
        position: absolute;
        bottom: 0;
        p{
          font-size: 20px;
          line-height: 14px;
          text-align: center;
          font-weight: bold;
          margin-top: 10px;
          margin-bottom: 1px;
        }
        span{
          font-size: 12px;
          padding-top: 5px;
          line-height: 12px;
          display: block;
          text-align: center;
        }
      }
    }
    .pre{
      flex: 1;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      .zy{
        font-size: 14px;
        line-height: 20px;
        color: #777;
      }
    }
  }

}
</style>