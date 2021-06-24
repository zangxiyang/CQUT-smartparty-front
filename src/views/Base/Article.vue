<template>
  <base-content-layout>
    <el-breadcrumb>
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{name: vuexNavRouterName}">{{ vuexNavName }}</el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <card-view style="margin-top: 60px;position:relative;">
      <div class="head-title none-select">
        <div class="head">
          <span>{{ vuexNavName }}</span>
        </div>
      </div>
      <main class="article-content">
        <h3 class="desc none-select">{{ articleDetail.remark }}</h3>
        <div class="title f-jc-c">{{ articleDetail.title }}</div>
        <div class="info f-jc-c al-c">
          <span class="mr-20">发布时间: {{ articleDetail.time }}</span>
          <span class="mr-20">来源: {{articleDetail.orgName}}</span>
          <span>作者:
            <template v-if="articleDetail.hostpeople">{{articleDetail.hostpeople}}</template>
            <template v-else>管理员</template>
          </span>
        </div>
        <div class="yue" v-html="htmlText" style="padding-top: 20px"></div>
      </main>
    </card-view>
  </base-content-layout>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";
import {IArticle} from "@/models/IArticle";

// 引入文章排版css
import 'yue.css/yue.css'
import {BranchWorkService} from "@/api";

export default defineComponent({
  name: "Article",
  components: {CardView, BaseContentLayout},
  props:{
    id: Number
  },
  setup(props) {
    const htmlText = ref(`暂无内容`);

    const articleDetail = ref<IArticle>({} as IArticle);

    //========================================方法区============================================
    const initLoad = ()=>{
      BranchWorkService.getPartyWorkDetail(props.id as number).then(res=>{
        articleDetail.value = res.data as IArticle
        htmlText.value = res.data.content
      })
    }

    //=========================================执行区==========================================
    initLoad()  // 初始化加载
    return {
      htmlText,
      articleDetail
    }
  }
})
</script>

<style lang="scss" scoped>
.head-title {
  position: absolute;
  box-sizing: border-box;
  top: -40px;
  left: 0;
  height: 60px;
  width: 100%;

  .head {
    position: relative;
    &::before{
      content: "";
      width: 100%;
      background-color: #fdb840;
      top: 30px;
      left: 0;
      position: absolute;
      height: 1px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 30px;
      left: 0;
      top: 14px;
      background-color: #fdb840;
    }
    span {
      display: inline-block;
      height: 60px;
      font-size: 25px;
      line-height: 60px;
      padding: 0 30px;
      box-sizing: border-box;
      min-width: 220px;
      background-color: #c22424;
      position: relative;
      color: #fff;
      overflow: hidden;


      &::before{
        content: "";
        position: absolute;
        width: 10px;
        height: 1px;
        right: 0;
        top: 30px;
        background-color: #fdb840;
      }
      &::after {
        content: "";
        position: absolute;
        height: 30px;
        width: 1px;
        right: 10px;
        top: 14px;
        background-color: #e59598;
      }
    }
  }

}

.article-content {
  padding: 15px;

  .desc {
    padding-top: 20px;
    padding-left: 15px;
    font-size: 23px;
    font-weight: 400;
    color: #c44848;
  }

  .title {
    padding: 20px 0;
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 600;
  }

  .info {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
}
</style>