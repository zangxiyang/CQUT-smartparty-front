<template>
  <div class="party-select-container flex">
    <div class="left-title f-jc-c al-c">
      {{ title }}
    </div>
    <div class="right-content">
      <el-row :gutter="20" type="flex">
        <el-col v-for="item in items" :key="item.value" :span="4">
          <el-radio v-model="activeItem" border  :label="item.value" size="mini" @change="changeActive">
            {{ item.name }}
          </el-radio>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref,} from 'vue';
import {PartyBranch} from '@/utils/Interfaces'

export default defineComponent({
  name: "SelectContainer",
  props: {
    title: {
      type: String,
      required: false,
      default: () => '筛选条件'
    },
    items: Array as PropType<PartyBranch[]>
  },
  setup(props, {emit}) {
    const activeItem = ref<string>(); // 当前选中的项

    function changeActive(): void{
      console.log(`当前选中的项目：${activeItem.value}`);
      emit('update:activeItem',activeItem.value);
    }
    return {
      activeItem,changeActive
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