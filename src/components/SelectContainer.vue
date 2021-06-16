<template>
  <div class="party-select-container flex">
    <div class="left-title f-jc-c al-c">
      {{ title }}
    </div>
    <div class="right-content">
      <el-row :gutter="20" type="flex">
        <el-col v-for="item in items" :key="item.value" :span="4">
          <el-radio v-model="active" border  :label="item.value" size="mini" @change="$emit('change')">
            {{ item.name }}
          </el-radio>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, computed} from 'vue';
import {PartyBranch} from '@/utils/Interfaces'

export default defineComponent({
  name: "SelectContainer",
  emits: ['change','update:activeItem'],
  props: {
    title: {
      type: String,
      required: false,
      default: () => '筛选条件'
    },
    items: Array as PropType<PartyBranch[]>,
    activeItem: String
  },
  setup(props, {emit}) {
    const active = ref(computed({
      get: ()=> props.activeItem || '',
      set: v=> {emit('update:activeItem',v)}
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
    margin-left: 20px;
    ::v-deep {
      .el-radio {
        text-align: center;
        margin: 10px 0;
        width: 120px;
      }
      .el-radio__input .el-radio__inner {
        display: none;
      }
    }
  }
}
</style>