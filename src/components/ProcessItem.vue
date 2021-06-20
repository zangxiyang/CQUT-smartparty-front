<template>
  <el-row type="flex" :gutter="20" :class="[first? '':'mt-10']">
    <el-col :span="2">
      <div class="col">
        <maxer-badge :right="10" :title="title" color="danger"/>
      </div>
    </el-col>
    <el-col :span="22">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MaxerBadge from "@/components/MaxerBadge.vue";

export default defineComponent({
  name: "ProcessItem",
  components: {MaxerBadge},
  props:{
    title: String,
    first: Boolean
  }
})
</script>

<style scoped>

</style>