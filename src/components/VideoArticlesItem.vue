<template>
  <div class="list_box_item mb-20 cur-p">
    <div class="cover">
      <el-image class="image" :src="list.href" :fit="cover" lazy style="height: 100%;width: 100%"></el-image>
    </div>
    <div class="title">
      <div class="tag mb-5">{{ list.tag }}</div>
      <p :title="list.title">{{ list.title }}</p>
    </div>
    <div class="time-card flex al-c">
      <!--时间卡片-->
      <div class="content">
        <div class="day f-jc-c">
          18
        </div>
        <div class="year-month f-jc-c">
          2021.06
        </div>
      </div>
    </div>
    <div class="narrator-card f-jc-c al-c">
      {{ list.narrator }}
    </div>
    <div class="btn-play"></div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 视频card item 组件
 * 说明: 
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
*/
import {defineComponent, PropType, ref} from "vue";

export interface ColumnProps {
  id: string
  href: string,
  title: string,
  narrator: string,
  tag: string,
  time: any
}

export default defineComponent({
  name: "VideoArticlesItem",
  props: {
    list: {
      type: Object as PropType<ColumnProps>,
      required: true
    }
  },
  setup(props) {
    const cover = ref('cover');
    //TODO 处理时间
    return {
      cover
    }
  }
})
</script>

<style scoped lang="scss">
.list_box_item {
  font-family: "SourceSansPro-Regular", "微软雅黑", sans-serif;
  box-sizing: border-box;
  width: 430px;
  height: 270px;
  color: #A51211;
  position: relative;

  &:hover {
    .cover .image {
      transform: scale(1.4);
    }
  }

  .cover {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(25px);
    transition: 0.5s ease;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
      background: url("../assets/img/bg_before_red.png") center bottom repeat-x;
      background-size: 100% 8rem;
      z-index: 2;
    }

    &:hover {
      box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
      0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
      0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
    }

    .image {
      display: block;
      cursor: pointer;
      width: 100%;
      filter: blur(1px);
      transition: All 0.5s ease;
      -webkit-transition: All 0.5s ease;
      -moz-transition: All 0.5s ease;
      -o-transition: All 0.5s ease;
    }
  }

  .title {
    position: absolute;
    bottom: 10%;
    margin-top: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;

    .tag {
      display: inline-block;
      color: white;
      font-size: 14px;
      padding: 5px 10px;
      background: rgb(165, 18, 17);
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: bold;
      margin: 5px 0;
      width: 350px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p:hover {
      cursor: pointer;
    }
  }

  .time-card {
    position: absolute;
    top: 15%;
    left: -32.5px;
    height: 65px;
    width: 65px;
    background: url("../assets/img/img60.png") center no-repeat;
    background-size: cover;
    color: #fff;
    .content{
      width: 100%;
      .day{
        font-size: 1.8rem;
        line-height: 2rem;
        font-weight: 600;
      }
    }
  }
  .narrator-card{
    position: absolute;
    top: 5%;
    right: 0;
    min-height: 30px;
    padding: 5px 10px;
    background: #c22424;
    color: #fff;

  }
  .btn-play{
    width: 54px;
    height: 54px;
    background: rgba(0, 0, 0, 0.3) url('../assets/img/arrow11.png') center no-repeat;
    background-size: 11px;
    border: rgba(233, 233, 233, 0.3) solid 1px;
    position: absolute;
    z-index: 1;
    left: 50%;
    right: auto;
    top: 50%;
    bottom: auto;
    margin-left: -27px;
    margin-top: -27px;
  }
}
</style>