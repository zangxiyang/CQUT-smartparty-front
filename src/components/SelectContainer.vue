<template>
  <div class="party-select-container flex">
    <div class="left-title f-jc-c al-c">
      {{ title }}
    </div>
    <div class="right-content flex al-c">
      <div v-for="item in items" :key="item.id" class="mr-10">
        <el-radio v-model="active" border  :label="item.id" size="mini" @change="$emit('change')">
          {{ item.name }}
        </el-radio>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, computed} from 'vue';
import {PartyBranch} from '@/utils/Interfaces'

export default defineComponent({
  name: "SelectContainer",
  emits: ['change','update:modelValue'],
  props: {
    title: {
      type: String,
      required: false,
      default: () => '筛选条件'
    },
    items: Array as PropType<PartyBranch[]>,
    modelValue: [String,Number],
  },
  setup(props, {emit}) {
    const active = ref(computed({
      get: ()=> props.modelValue || '',
      set: v=> {emit('update:modelValue',v)}
    }));
    return {
      active
    }
  }
})
</script>

<style lang="scss" scoped>
.party-select-container {
  width: 100%;
  background: #fff;
  border: 1px solid #e3e3e3;
  border-radius: 5px;

  .left-title {
    min-width: 60px;
    text-align: center;
    padding: 10px;
    border-right: 1px solid #e3e3e3;
  }

  .right-content {
    padding: 5px 10px;
    margin: 0 20px;
    flex-wrap: wrap;
    justify-items: flex-start;
    align-content: flex-start;


    ::v-deep {
      .el-radio {
        text-align: center;
        margin: 10px 0;
      }
      .el-radio__input .el-radio__inner {
        display: none;
      }
    }
  }
}
</style>