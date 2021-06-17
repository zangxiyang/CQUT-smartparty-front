<template>
  <div class="detailBg"></div>
  <div class="info-container">
    <base-content-layout>
      <div class="container f-jc-sb al-c">
        <div class="author flex al-c">
          <div class="author-img">
            <el-image :src="require('@/assets/img/member.png')" style="width: 100%;height: 100%" fit="cover"></el-image>
          </div>
          <div class="author-name f-col">
            <div class="space">重庆理工大学</div>
            <div class="name">臧某某</div>
          </div>
        </div>
        <div class="info">目前就职等等</div>
      </div>
    </base-content-layout>
  </div>
  <base-content-layout>
    <card-view>
      测试
    </card-view>
  </base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 党员详情页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
 */
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";

export default defineComponent({
  name: "MemberDetail",
  components: {CardView, BaseContentLayout},
  props: {
    id: String
  },
  setup(props) {
    console.log(props.id)
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.detailBg {
  position: relative;
  margin-top: -20px;
  z-index: -1;
  width: 100%;
  height: 300px;
  background: url("../assets/img/detail_bg_1920.jpg") no-repeat;
  background-size: 100% 100%;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=");

  }
}
.info-container{
  box-sizing: border-box;
  background-color: #fff;
  padding: 0 10px 30px 10px;
  .container{
    .author-img{
      width: 260px;
      height: 260px;
      box-sizing: border-box;
      margin-top: -160px;
      border: 10px solid #ffffff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,.8);
    }
    .author-name{
      margin-left: 15px;
      font-size: 14px;
      .space{
        color: #828282;
      }
      .name{
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
}
</style>