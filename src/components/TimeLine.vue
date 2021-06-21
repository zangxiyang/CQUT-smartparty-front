<template>
  <div class="party-time-line-container">
    <div class="now-day f-jc-c al-c">
      <div class="today">
        今天
      </div>
    </div>
    <div class="time-line-item">
      <div class="content flex">
        <div class="img">
          <img src="https://www.sf-express.com/cn/sc/download/SF-CN-DH-1.jpg" alt="" style="width: 100%">
        </div>
        <div class="arrow">
          <img/>
        </div>
        <div class="desc">
          <h3 class="date-time">2020-06-09</h3>
          <h3 class="title">标题内容标题内容</h3>
          <div class="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        </div>
      </div>
    </div>

    <!--不同样式-->
    <!--偶数项-->
    <div class="time-line-item">
      <div class="content flex">
        <div class="img" style="order: 3;">
          <img src="https://www.sf-express.com/cn/sc/download/SF-CN-DH-3.jpg" alt="" style="width: 100%">
        </div>
        <div class="arrow" style="order: 2;width: 47px;margin-left: 33px">
          <img class="arrow2"/>
        </div>
        <div class="desc" style="order: 1">
          <h3 class="date-time">2020-06-09</h3>
          <h3 class="title">标题内容标题内容</h3>
          <div class="content">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
/**
 * 名称: 发展历程， 时间轴组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/21
 * 版本: V1
*/
import {defineComponent} from 'vue';
// todo 封装为组件
export default defineComponent({
  name: "TimeLine",
  setup(prop) {
    return {}
  },
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .party-time-line-container{
    .now-day{
      width: 100%;
      padding-top: 2rem;
      font-size: 18px;
      color: #fff;
      .today{
        border-radius: 50%;
        width: 80px;
        background-color: #dc1e32;
        line-height: 80px;
        text-align: center;
      }
    }
    .time-line-item{
      background: url("../assets/img/redline.jpg") repeat-y center center;
      padding: 29px 53px;
      .content{
        width: 974px;
        overflow: hidden;
        .img{
          width: 448px;
          text-align: right;
          overflow: hidden;
        }
        .desc{
          position: relative;
          width: 430px;
          margin-left: 30px;
          .date-time{
            font-size: 1.5rem;
            color: #c22424;
          }
          .title{
            font-size: 1.5rem;
            font-weight: 600;
            padding: 10px 0;
          }
          .content{
            width: 100%;
            overflow: hidden;
            font-size: 14px;
          }
        }
        .arrow{
          position: relative;
          width: 56px;
          height: 18px;
          margin-top: 20px;
          border: 0;
          overflow: hidden;
          img{
            width: 58px;
            height: 20px;
            display: block;
            background: url("../assets/img/philathropy-arrow.png");
            position: absolute;
            border: 0;
            outline: 0;
            top: -1px;
            left: -1px;
            &.arrow2{
              background: url("../assets/img/philathropy-arrow.png") 0 20px;
            }
          }
        }
      }
    }
  }
</style>