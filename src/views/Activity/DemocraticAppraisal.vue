<template>
  <select-container-layout v-model="active" title="党支部" @change="selectContainerClick">
    <el-table
        :data="listArr"
        style="width: 100%">
      <el-table-column
          label="日期"
          width="180">
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="评议标题">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top">
            <template #default>
              {{ scope.row.title }}
            </template>
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.title }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="所属党支部" property="orgName"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
              size="mini"
              type="danger"
              @click="watchResult(scope.$index, scope.row)">查看结果
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--信息显示模态框-->
    <el-dialog title="评议结果" v-model="resultModalVisible">
      <div class="content" style="height: 280px;overflow-y: auto"
           v-infinite-scroll="loadInfiniteScroll">
        <el-table :data="resultModalTable" height="280" :row-class-name="tableRowClassName">
          <el-table-column property="partyName" label="姓名"></el-table-column>
          <el-table-column label="评议等级">
            <template #default="scope">
              {{levelMap(scope.row.level)}}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>

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
 * 名称: 民主评议界面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/18
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import SelectContainerLayout from "@/layout/SelectContainerLayout.vue";
import {IArticleList} from "@/models/IArticleList";
import {useRouter} from "vue-router";
import {BranchWorkService} from "@/api";
import {ArticleType} from "@/utils/ConstantMap";
import {IPagination} from "@/models/IPagination";

export default defineComponent({
  name: "DemocraticAppraisal",
  components: {SelectContainerLayout},
  setup() {
    const active = ref(1);
    const listArr = ref<IArticleList[]>();
    const router = useRouter();
    const resultModalVisible = ref<boolean>(false);
    const resultModalTable = ref([]);
    const workId = ref();

    // 加载方法
    const loadData = (orgId = 1, page = 1): void => {
      listArr.value = []
      BranchWorkService.getPartyWorkList(orgId, ArticleType.DEMOCRATIC_REVIEW, page, 10).then(res => {
        console.log(res)
        const {list, ...params} = res.data
        listArr.value = list     //   填充数据
        pagination.value = params;  //   初始化pagination对象
        // 使页面滑动到最顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    // 模态框加载数据方法
    const loadModalData = (workId: number, page = 1): void => {
      BranchWorkService.getAppraisal(workId, page).then(res => {
        try {
          const {list, ...params} = res.data
          // 构建分页模型
          infiniteScrollModel.value = params;
          if (resultModalTable.value.length === 0){
            // 当前是首次加载
            resultModalTable.value = list
          }else{
            // 不是首次加载
            resultModalTable.value.push(...list)
          }
        }catch (e){
          console.log(e)
          return
        }
      })
    }
    // 模态框下拉无限加载
    const loadInfiniteScroll = ()=>{
      if (infiniteScrollModel.value.currPage < infiniteScrollModel.value.totalPage){
        loadModalData(workId.value,infiniteScrollModel.value.currPage + 1);
      }
    }

    // 表格class样式修改
    function tableRowClassName({row}) {
      if (row.level === 3) {
        return 'warning-row';
      } else if (row.level === 0) {
        return 'success-row';
      }
    }

    // 构建无限滚动模型
    const infiniteScrollModel = ref({
      totalCount: 0,
      pageSize: 0,
      totalPage: 0,
      currPage: 0
    });

    // 构建分页对象
    const pagination = ref<IPagination>({
      totalCount: 0,
      pageSize: 0,
      totalPage: 0,
      currPage: 0
    } as IPagination);


    // 分页被改变页数
    const currentChange = (page: number) => {
      loadData(active.value, page)
    }
    // 选择支部被改变
    const selectContainerClick = () => {
      loadData(active.value)
    }
    // 查看结果被点击
    const watchResult = (index: number, row: object) => {
      // 显示模态框
      resultModalVisible.value = true
      // 开始加载数据
      workId.value = row.id;
      resultModalTable.value = []
      loadModalData(row.id)

    }

    const levelMap = (val: number): string =>{
      switch (val){
        case 0:
          return '优';
        case 1:
          return '良';
        case 2:
          return '中';
        case 3:
          return '差';
        default:
          return '';
      }
    }

    // 初始化方法
    const initLoad = () => {
      loadData(active.value)
    }
    //====================//====================//====================//====================

    initLoad(); // 初始化数据加载

    const click = (id: number) => {

      router.push(`/article/${id}`);
    }

    return {
      active,
      listArr,
      click,
      currentChange,
      selectContainerClick,
      pagination,
      watchResult,
      resultModalVisible,
      resultModalTable,
      infiniteScrollModel,
      loadModalData,
      workId,
      loadInfiniteScroll,
      levelMap,
      tableRowClassName
    }
  },
})
</script>

<style lang="scss">
.el-table{
.warning-row{
  background-color: #ffcbcb;
}
.success-row{
  background-color: #f0f9eb;
}
}
</style>