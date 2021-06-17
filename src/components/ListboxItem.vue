<template>
<div class="list_box_item">
  <div class="cover">
    <el-image  class="image" :src="list.href" :fit="cover" lazy></el-image>
  </div>
  <div class="title"><h3>{{list.title}}</h3></div>
  <div class="bar_content">
    <div class="narrator">{{list.narrator}}</div>
    <div class="time">{{list.time}}</div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent, PropType,ref} from "vue";
import {prop} from "vue-class-component";

export interface ColumnProps{
  href:string,
  title:string,
  narrator:string
  time:any
}
export default defineComponent({
  name: "ListboxItem",
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
  width: 310px;
  height: 380px;
  font-size: 16px;
  color: #666;
  .cover{

    .image{
      width: 310px;
      height: 310px;
    }
  }
  .title{
    margin-top: 15px;
    h3{
      width: 290px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .bar_content{
    margin-top: 10px;
    display: flex;
    justify-content:space-between;
    .narrator{
    }
  }
}
</style>