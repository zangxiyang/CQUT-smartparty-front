/* eslint-disable */
import {apiURL} from "@/utils/apiURL";
import {mapMutations} from "vuex";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'mockjs'
declare module 'element-plus'
declare module '*'