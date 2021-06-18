<template>
<div class="list_box_item">
  <div class="cover">
    <el-image  class="image" :src="list.href" :fit="cover" lazy></el-image>
  </div>
  <div class="title">
    <span class="tag">{{list.tag}}</span>
    <p>{{list.title}}</p>
  </div>
  <div class="bar_content">
    <div class="narrator">
      <svg t="1623931069602" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1342" width="200" height="200"><path d="M678.85522919 542.92376709C771.03326874 542.92376709 845.71008759 619.00958252 845.71008759 712.8190918V853.86706543c0 16.01806641-12.75512695 28.99566651-28.4765625 28.9956665H206.76721649A28.69903565 28.69903565 0 0 1 178.29065399 853.86706543V712.74493408c0-93.80950927 74.67681885-169.89532471 166.85485841-169.89532471h333.70971679zM514.37341766 141.21142578c100.48370362 0 181.98303223 83.05664063 181.98303224 185.39428711S614.85712128 512 514.29925994 512C413.81555634 512 332.31622773 428.94335937 332.31622773 326.60571289S413.81555634 141.21142578 514.29925994 141.21142578z" p-id="1343"></path></svg>
      <span> {{list.narrator}}</span>
    </div>
    <div class="time">
      <svg t="1623931290392" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2279" width="200" height="200"><path d="M498.506684 256.571517 425.359734 256.571517 425.359734 622.190635 720.166063 622.190635 720.166063 549.725206 498.506684 549.725206ZM512.714268 80.162738c-245.740844 0-445.181175 197.577914-445.181175 441.024505s199.439308 441.024505 445.181175 441.024505c245.738797 0 445.178105-197.577914 445.178105-441.024505S758.453065 80.162738 512.714268 80.162738zM512.714268 874.005824c-195.880249 0-356.145349-158.768003-356.145349-352.818581s160.2651-352.821651 356.145349-352.821651c195.877179 0 356.14228 158.77005 356.14228 352.821651S708.591447 874.005824 512.714268 874.005824z" p-id="2280"></path></svg>
      <span> {{list.time}}</span>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType,ref} from "vue";

export interface ColumnProps{
  id:string
  href:string,
  title:string,
  narrator:string,
  tag:string,
  time:any
}
export default defineComponent({
  name: "VideoArticlesItem",
  props:{
    list:{
      type:Object as PropType<ColumnProps>,
      required:true
    }
  },
  setup(props){
    const cover = ref('cover');
    return {
      cover
    }
  }
})
</script>

<style scoped lang="scss">
.list_box_item{
  font-family: "SourceSansPro-Regular", "微软雅黑",sans-serif;
  width: 400px;
  height: 380px;
  color: #A51211;
  position: relative;
  .cover{
    overflow: hidden;
    width: 100%;
    height: auto;
    box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126),
    0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224),
    0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(25px);
    transition: 0.5s ease;
    &:hover {
      box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157),
      0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28),
      0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5);
    }
    .image{
      display: block;
      cursor: pointer;
      width: 100%;
      filter: blur(1px);
      transition: All 0.5s ease;
      -webkit-transition: All 0.5s ease;
      -moz-transition: All 0.5s ease;
      -o-transition: All 0.5s ease;
    }
    .image:hover{
      transform: scale(1.4);
    }
  }
  .title{
    position:absolute;
    top:160px ;
    margin-top: 15px;
    left: 50%;
    transform: translateX(-50%);
    .tag{
      color: white;
      font-size: 14px;
      padding: 5px;
      background:#791CB5;
    }
    p{
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
      margin: 5px 0;
      width: 350px;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p:hover{
      cursor:pointer;
    }
  }
  .bar_content{
    font-size: 18px;
    margin-top: 25px;
    .narrator{
      .icon{
        margin-right: 5px;
      }
    }
    .time{
      .icon{
        margin-right: 5px;
      }
    }
  }
}
</style>