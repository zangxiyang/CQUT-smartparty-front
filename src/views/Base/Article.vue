<template>
  <base-content-layout>
    <el-breadcrumb>
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item>上一层，通过传递参数显示</el-breadcrumb-item>
      <el-breadcrumb-item>正文</el-breadcrumb-item>
    </el-breadcrumb>
    <card-view style="margin-top: 60px;position:relative;">
      <div class="head-title none-select">
        <div class="head">
          <span>党务工作</span>
        </div>
      </div>
      <main class="article-content">
        <h3 class="desc none-select">一百年征程浩荡，五十载初心依旧</h3>
        <div class="title f-jc-c">重庆理工大学举行"光荣xxxxx"活动世纪大劫案搜到撒娇地哦啊说京东及撒旦教奥斯觉得哦</div>
        <div class="info f-jc-c al-c">
          <span class="mr-20">发布时间: 2021-06-20</span>
          <span class="mr-20">来源: 组织</span>
          <span>作者: 主持人</span>
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

// 引入文章排版css
import 'yue.css/yue.css'

export default defineComponent({
  name: "Article",
  components: {CardView, BaseContentLayout},
  setup() {
    const htmlText = ref(`
<blockquote>争做国内使用体验Z好的开源 Web 富文本编辑器！</blockquote><h1>为何选择 wangEditor</h1><ul><li>简洁、轻量级、<a href="https://www.wangeditor.com/doc/">文档</a>齐全</li><li>万星项目&nbsp;<a href="https://github.com/wangeditor-team/wangEditor/releases">Github Star 1w+</a></li><li>npm 周下载量 1w+</li><li>CDN 月下载量百万+（来自&nbsp;<a href="https://www.jsdelivr.com/package/npm/wangeditor">jsdelivr</a>）</li>
<li>QQ 群及时答疑</li><li><a href="https://www.wangeditor.com/doc/#%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98">开源团队</a>维护，非个人单兵作战</li></ul><h1>初见</h1><p>npm 安装&nbsp;<code>npm i wangeditor --save</code>&nbsp;，几行代码即可创建一个编辑器。</p><pre><code>import E from 'wangeditor'
const editor = new E('#div1')
editor.create()</code></pre><p>更多使用配置，请阅读<a href="https://www.wangeditor.com/doc/">使用文档</a>。</p><h1>demo</h1><p>在线体验 demo 可到&nbsp;<a href="https://codepen.io/collection/DNmPQV">codepen.io/collection/DNmPQV</a>&nbsp;。</p><p>注意，如果打不开，可以去查看&nbsp;<a href="https://github.com/wangeditor-team/wangEditor/tree/master/examples">github examples</a>&nbsp;的源码。</p><h1>浏览器兼容性</h1><ul><li>兼容主流 PC 浏览器，IE11+</li><li>不支持移动端和 ipad</li></ul><h1>遇到问题</h1><ul><li>加入 QQ 群：164999061(人已满)，710646022(人已满)，901247714</li><li><a href="https://github.com/wangeditor-team/wangEditor/issues" target="_blank">提交问题和建议</a></li></ul><h1>贡献代码</h1><p>欢迎非团队成员贡献代码，提交 Pull Request，请一定参考<a href="https://github.com/wangeditor-team/wangEditor/blob/master/docs/contribution.md" target="_blank">贡献代码流程</a>。</p><h1>谁在维护</h1><p>wangEditor 现有一个开源团队在维护，团队可以保证答疑、bug 修复和迭代效率。</p><p><a href="https://www.wangeditor.com/doc/#%E5%BC%80%E5%8F%91%E4%BA%BA%E5%91%98">查看开发团队，或想加入开发团队</a></p><h1>为我们点赞</h1><p>如果你感觉有收获，欢迎给我打赏，以激励我们更多输出优质开源内容。</p><p><img src="https://www.wangeditor.com/imgs/ali-pay.jpeg"/>&nbsp;<img src="https://www.wangeditor.com/imgs/wechat-pay.jpeg"/></p><p><br/></p>
    <p>安抚阿斯蒂芬阿斯蒂芬按时按时安抚阿斯蒂芬</p><p><img src="http://dev.flyly.xyz/oss/images/20210620/2eb05029821b4a7ea2853f065399f2e9.PNG" style="max-width:100%;" contenteditable="false"/><br/>阿大声道按时</p>
    <p><img src="http://dev.flyly.xyz/oss/images/20210620/34a1cf1f6980485ea35209bc6c08f751.png" style="max-width:100%;" contenteditable="false"/><br/><br/></p><p><b>安抚阿斯蒂芬按时发单</b></p><p>ASD ASFD AD</p>
    <p>SDAFASDF ASDF ASD</p><video src="http://dev.flyly.xyz/oss/video/20210620/597e8f3daa69415f998b0b54994798f5.mp4" controls="controls" style="max-width:100%"><[表情]ideo>
    `);

    return {
      htmlText
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