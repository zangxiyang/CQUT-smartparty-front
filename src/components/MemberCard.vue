<template>
  <div class="member-card flex f-col mb-20 cur-p">
    <div class="header">
      <el-image :src="img" fit="fill" v-if="img != null" style="height: 100%;width:100%;"/>
      <el-image :src="require('@/assets/img/member.png')" fit="fill" v-else style="height: 100%"/>
    </div>
    <div class="name f-jc-c al-c" v-if="!big">
      {{name}}
    </div>
    <div class="more f-col" v-else>
      <div class="name f-jc-c al-c mb-5">
        {{name}}
      </div>
      <div class="desc f-jc-c al-c mb-5">
        <!--更多信息-->
        于{{date}}入党
      </div>
      <div class="party-year f-jc-c al-c">
        <!--党龄-->
        党龄{{partyYear}}年
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * 名称: 头像卡片组件
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
 */
import {defineComponent} from 'vue';

export default defineComponent({
  name: "MemberCard",
  props:{
    name: [String,Number],
    img: String,
    id: [String,Number],
    partyYear: [Number,String],  // 党龄
    date: String,       // 入党时间
    desc: String,       // 其他介绍
    big: {
      type: Boolean,
      default: ()=> false
    }

  }
})
</script>

<style lang="scss" scoped>
.member-card{
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
  align-content: flex-start;
  background-color: #fff;
  border-radius: 4px;
  .header{
    position: relative;
    height: 170px;
    width: 100%;
    overflow: hidden;
    &::after{
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      height: 100%;
      width: 100%;
      background-image: url('../assets/img/brush.svg');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .name{
    padding: 2px;
    user-select: none;
  }
  .more{
    padding: 20px 10px;
  }
}
</style>