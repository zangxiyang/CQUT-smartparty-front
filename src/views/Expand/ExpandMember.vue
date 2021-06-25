<template>
  <select-container-layout title="党支部" v-model="active" @change="selectContainerClick">
    <div class="header f-jc-sb al-c">
      <el-select v-model="yearActive" placeholder="请选择年份" @change="selectChange">
        <el-option v-for="item in options" :key="item.year"
                   :label="item.year + '年'" :value="item.year"/>
      </el-select>
      <div class="member-num">
        <el-tag effect="dark" type="danger">入党人数: <span>{{ yearNums }}</span></el-tag>
      </div>
    </div>
    <div class="content">
      <member-list :lists="memberList" @click="click"/>
    </div>
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
 * 名称: 年度发展党员
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import MemberList from "@/components/MemberList.vue";
import {IMemberList} from "@/utils/Interfaces";
import {useRouter} from "vue-router";
import {BranchWorkService} from "@/api";
import {IPagination} from "@/models/IPagination";

export default defineComponent({
  name: "ExpandMember",
  components: {MemberList, SelectContainerLayout},
  setup() {
    const active = ref(1);
    const yearActive = ref('');
    const yearNums = ref();
    const router = useRouter();
    // 支部年度选择数据
    const options = ref([]);
    // 构建分页对象
    const pagination = ref<IPagination>({
      totalCount: 0,
      pageSize: 0,
      totalPage: 0,
      currPage: 0
    } as IPagination);

    // 成员列表
    const memberList = ref([] as IMemberList);
    // 加载党支部的数据
    const loadOrgInfo = async (orgId: number): Promise => {
      options.value = []; //清空数据
      await BranchWorkService.getPartyGrowInfo(orgId).then(res => {
        options.value = res.data;
        try {
          yearActive.value = options?.value[0].year; // 默认为第一项选中
          yearNums.value = options?.value[0].num;    // 默认为第一项的人数
        }catch (e){
          // 清空数据
          memberList.value = []
          options.value = []
          yearActive.value = ''
          yearNums.value = '空'
        }
      })
    }
    // 加载列表数据
    const loadData = (year, orgId = 1, page = 1): void => {
      memberList.value = []
      BranchWorkService.getPartyGrowList(year, orgId, page, 12).then(res => {
        const {list, ...params} = res.data
        memberList.value = list     //   填充数据
        pagination.value = params;  //   初始化pagination对象
      })
    }

    // 初始化方法
    const initLoad = () => {
      // 初始化执行的请求流程 ：1. 首先加载orgInfo信息，之后加载data信息
      loadOrgInfo(active.value).then(() => {
        loadData(yearActive.value)
      })
    }


    // 选择支部被改变
    const selectContainerClick = () => {
      loadOrgInfo(active.value).then(() => {
        loadData(yearActive.value, active.value)
      })
    }

    // 分页被改变页数
    const currentChange = (page: number) => {
      loadData(yearActive.value, active.value, page);
    }

    // 选择框被改变
    const selectChange = (val: string) => {
      // 首先查找在options中对应年份的值
      options.value.forEach((o: object) => {
        if (o.year == val) {
          yearNums.value = o.num;
        }
      });
      // 之后加载数据
      loadData(val, active.value, 1)
    }


    const click = (id: string) => {
      router.push(`/branch/member/${id}`);
    }


    // ====================================================================================
    initLoad();

    return {
      active,
      yearActive,
      click,
      selectContainerClick,
      selectChange,
      yearNums,
      memberList,
      options,
      pagination,
      currentChange,
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.content {
  padding-top: 20px;
}
</style>