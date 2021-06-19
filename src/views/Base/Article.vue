<template>
  <base-content-layout>
    测试
  </base-content-layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";

export default defineComponent({
  name: "Article",
  components: {BaseContentLayout},
  data() {
    return {

    }
  }
})
</script>

<style scoped>

</style>