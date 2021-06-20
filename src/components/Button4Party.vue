<template>
  <div class="party-button">
    <el-button @click="click">
      <!--<a :href="href" v-if="isHref">
        <svg t="1623814418072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3993" width="200" height="200">
          <path
              d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z"
              p-id="3994"></path>
        </svg>
        <span style="margin-left: 5px">{{ text }}</span>
      </a>-->
      <div class="flex al-c">
        <svg t="1623814418072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="3993" width="200" height="200">
          <path
              d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z"
              p-id="3994"></path>
        </svg>
        <span style="margin-left: 5px">{{ text }}</span>
      </div>
    </el-button>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 党建风格按钮组件
 * 说明: 修改ElementPlus默认按钮，封装成党建风格按钮
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Button4Party",
  emits: ['click'],
  props: {
    // 按钮文本内容
    text: {
      type: String,
      required: false
    },
    // 按钮跳转到的内容
    href: {
      type: String
    }
  },
  setup(props,{emit}) {
    const isHref = props.href == null; // 当前是否为跳转按钮
    const click = ()=>{
      emit('click');
    }

    return {
      click, isHref
    }
  }
})
</script>

<style lang="scss" scoped>

.party-button{
  ::v-deep .el-button {
    //border: none;
    min-height: 30px;
    padding: 8px 15px;

    &:focus {
      border-color: #c22424;
      color: #c22424;
    }

    &:hover {
      color: #ffffff;
      background-color: #c22424;
    }
  }
}

</style>