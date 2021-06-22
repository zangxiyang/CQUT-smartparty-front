<template>
  <select-container-layout title="党支部" v-model="orgId" @change="selectContainerClick">
    <member-list :lists="list" @click="click"/>
    <div class="party-pagination f-jc-c al-c">
      <el-pagination background layout="prev,pager,next"
                     :total="pagination.totalCount"
                     :page-size="pagination.pageSize"
                     :current-page="pagination.currPage"
                     :page-count="pagination.totalPage"
                     @current-change="currentChange"
                     class="mt-20"/>
    </div>
  </select-container-layout>
</template>

<script lang="ts">
/**
 * 名称: 全体党员页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/16
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import MemberList from "@/components/MemberList.vue";
import {useRouter} from "vue-router";
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";

import {BranchWorkService} from "@/api";
import {IPagination} from "@/models/IPagination";
export default defineComponent({
  name: "AllPartyMember",
  components: {SelectContainerLayout, MemberList},
  setup(){
    const orgId = ref(1);
    const selectContainerClick = ()=>{
      console.log(`当前选中的项：${orgId.value}`);
      pagination.value.currPage = 1;
      loadData(orgId.value)
    }
    const router = useRouter()

    // 构建分页对象
    const pagination = ref<IPagination>({
      totalCount: 0,
      pageSize: 0,
      totalPage: 0,
      currPage: 0
    } as IPagination);

    // 成员列表
    const memberList = ref([]);
    // 初始化加载

    const loadData = (orgId = 1,page= 1): void=>{
      memberList.value = []
      BranchWorkService.getPartyMemberList(orgId,page,12).then(res=>{
        const {list, ...params} = res.data
        memberList.value = list     //   填充数据
        pagination.value = params;  //   初始化pagination对象
      })
    }

    // 初始化方法
    const initLoad = () =>{
      loadData(orgId.value)
    }
    // 分页被改变页数
    const currentChange = (page: number)=>{
      loadData(orgId.value,page)
    }

    initLoad(); // 初始化加载


    const click = (id: string)=>{
      router.push(`/branch/member/${id}`);
    }




    // 分页


    return{
      selectContainerClick,orgId,list: memberList,
      click,
      pagination,
      currentChange
    }
  }
})
</script>

<style scoped>

</style>