<template>
<base-content-layout>
    <card-view>
      <el-steps simple :active="active" space="horizontal">
        <el-step title="申请入党"/>
        <el-step title="入党积极分子的确定和培养教育"/>
        <el-step title="发展对象的确定和考察"/>
        <el-step title="预备党员的接收"/>
        <el-step title="预备党员的教育考察和转正"/>
      </el-steps>
      <div class="content mt-10 p-10">
        <template v-if="active === 1">
          <!--申请入党-->
          <apply/>
        </template>
        <template v-else-if="active === 2">
          <!--入党积极分子的确定和培养教育-->
          <activists/>
        </template>
      </div>
      <div class="operation-container">
        <div class="f-jc-c al-c" style="width: 100%">
          <button4-party :text="buttonText" @click="nextStep"/>
        </div>
      </div>

    </card-view>
</base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 入党流程界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";
import Button4Party from "@/components/Button4Party.vue";
import Apply from "@/components/JoinProcessPart/Apply.vue";
import Activists from "@/components/JoinProcessPart/Activists.vue";

export default defineComponent({
  name: "JoinProcess",
  components: {Activists, Apply, Button4Party, CardView, BaseContentLayout},
  setup(){
    const active = ref(1);
    const buttonText = ref('已知晓，下一步');
    // 进度条 下一步
    const nextStep = ()=>{
      buttonText.value = '已知晓，下一步';
      if (active.value === 5){
        active.value = 1;
        return;
      }
      active.value++;
      if (active.value === 5) buttonText.value = "已了解，回到开始";
    }

    return{
      active,
      nextStep,
      buttonText
    }
  }
})
</script>

<style lang="scss" scoped>
.party-container{
  position: relative;
  ::v-deep{
    .el-step__line{
      display: none;
    }
  }
}
.content{
  position: relative;
  padding-bottom: 50px;
  height: 100%;
}
.operation-container{
  position: absolute;
  padding: 0 10px;
  width: 100%;
  bottom: 5%;
  left: 0;
}
.col{
  width: 100%;
  text-align: right;
}
</style>