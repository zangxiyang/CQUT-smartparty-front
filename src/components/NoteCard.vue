<template>
  <div class="note-card">
    <div class="header">
      <el-image style="height: 100%;width: 100%"
                fit="cover"
                :src="img"
                :preview-src-list="[img]"
      >

      </el-image>
    </div>
    <div class="info f-jc-c none-select mt-5">
      测试
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 学习笔记等卡片
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/19
 * 版本: V1
*/
import {defineComponent} from 'vue';

export default defineComponent({
  name: "NoteCard",
  props:{
    img: String,
    title: String
  }
})
</script>

<style lang="scss" scoped>
.note-card{
  position: relative;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 10px;
  .header{
    width: 100%;
    height: 200px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.7);
    border-radius: 10px;

  }
  .info{
    height: 30px;
  }
}
</style>