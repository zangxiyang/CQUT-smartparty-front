<template>
<div class="header">
  <div class="header-container">
    <div class="logo flex al-c">
      <svg t="1623829979963" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1217" width="200" height="200"><path d="M514.56 71.68c228.352 85.504 367.104 359.936 248.32 581.632L473.088 361.984 584.192 250.88l-69.12-69.12c-38.4 37.376-98.816 45.568-139.776 28.672l-220.16 220.672L280.064 555.52l82.944-82.944L652.8 763.392c-141.824 77.824-338.432 53.248-483.328-97.28l-70.144 70.144c20.992 29.184 38.912 55.808 60.416 77.824-2.048 2.048-8.192 7.168-8.192 7.168-3.584-0.512-8.192-2.048-11.776-2.048-37.376 0-67.584 32.768-67.584 70.144 0 37.376 30.72 67.584 68.096 67.584 37.376 0 69.632-30.72 69.632-68.096 0-4.608-1.024-8.192-1.536-12.288l10.752-10.752c166.912 112.64 349.696 126.464 546.304 8.704l81.408 81.408 111.104-109.568-81.92-82.432c233.472-353.28-79.36-700.928-361.472-692.224z" p-id="1218"></path></svg>
      <span class="ml-5">重庆理工大学智慧党建</span>
    </div>
  </div>
  <div class="header-bg">
    <div class="bg"></div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Header",
  data() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header{
  position: relative;
  min-height: 120px;
  color: #fff;
  .header-container{
    width: 1140px;
    margin: 0 auto;
    .logo{
      min-height: 120px;
      font-size: 2rem;
      svg{
        font-size: 2.5rem;
      }
    }
  }
  .header-bg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 120px;
    width: 100%;
    background-color: #a40000;
    .bg{
      height: 120px;
      background-image: url("../assets/img/header_back.jpg");
      background-position: -300px 80%;
      opacity: .8;
    }
  }
}
</style>