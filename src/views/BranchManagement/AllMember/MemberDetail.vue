<template>
  <div class="detailBg"></div>
  <div class="info-container">
    <base-content-layout>
      <div class="container f-jc-sb al-c">
        <div class="author flex al-c">
          <div class="author-img none-select">
            <el-image :src="partyMember.picurl" style="width: 100%;height: 100%" fit="cover"></el-image>
          </div>
          <div class="author-name f-col">
            <div class="space none-select">重庆理工大学</div>
            <div class="name">{{partyMember.name}}</div>
          </div>
        </div>
        <div class="badge">
          <maxer-badge :content="partyMember.post"
                       :title="partyMember.post"
                       color="danger"
                       is-popover
                       />
          <maxer-badge :content="partyMember.visage"
                       :title="partyMember.visage"
                       is-popover
                       :left="10"
                       />
        </div>
        <div class="info f-col none-select">
          <el-row :gutter="2" type="flex">
            <el-col :span="5">
              <div class="info-col">所属组织</div>
              <div class="info-col">当前状态</div>
              <div class="info-col">出生日期</div>
            </el-col>
            <el-col :span="19">
              <div class="info-col" title="重庆理工大学两江人工智能学院党总支">{{ partyMember.orgName }}</div>
              <div class="info-col" title="在当前支部">
                <template v-if="partyMember.status === 1">
                  在当前党支部
                </template>
                <template v-else>
                  转出
                </template>
              </div>
              <div class="info-col" title="1999.05.22">{{ partyMember.birth }}</div>
            </el-col>
          </el-row>
        </div>
      </div>
    </base-content-layout>
  </div>
  <base-content-layout>
    <card-view>
      <!--中部信息展示-->
      <div class="middle-container">
        <div class="head-title flex al-c">
          <svg t="1623915343274" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2412" width="200" height="200"><path d="M621.286 576H402.74C215.66 576 64 731.416 64 923.162v22.408c0 78.345 151.661 78.43 338.74 78.43h218.546C808.339 1024 960 1021.114 960 945.57v-22.408C960 731.416 808.339 576 621.286 576z" p-id="2413"></path><path d="M512 256m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" p-id="2414"></path></svg>
          <span class="ml-10">个人信息</span>
        </div>
        <div class="content-container">
          <el-descriptions class="margin-top" :column="3" border>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-user"></i>
                姓名
              </template>
              {{ partyMember.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-user-solid"></i>
                性别
              </template>
              {{ partyMember.sex }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-notebook-1"></i>
                学历
              </template>
              {{ partyMember.education }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-star-on"></i>
                担任职务
              </template>
              {{ partyMember.post }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-s-flag"></i>
                政治面貌
              </template>
              {{ partyMember.visage }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-s-custom"></i>
                所属组织
              </template>
              {{ partyMember.orgName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                申请入党时间
              </template>
              {{ partyMember.applytime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                确定积极分子时间
              </template>
              {{ partyMember.activisttime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                确定发展对象时间
              </template>
              {{ partyMember.developtime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                确定预备党员时间
              </template>
              {{ partyMember.preparetime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                正式党员时间
              </template>
              {{ partyMember.formaltime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                转入时间
              </template>
              {{ partyMember.intotime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-date"></i>
                转出时间
              </template>
              {{ partyMember.outtime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template #label>
                <i class="el-icon-question"></i>
                当前状态
              </template>
              <template v-if="partyMember.status === 1">
                在当前党支部
              </template>
              <template v-else>
                转出
              </template>
            </el-descriptions-item>

          </el-descriptions>
        </div>
        <div class="head-title flex al-c">
          <svg t="1623917304365" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3231" width="200" height="200"><path d="M614.4 0H204.8A102.263467 102.263467 0 0 0 102.912 102.4L102.4 921.6c0 56.32 45.568 102.4 101.888 102.4H819.2c56.32 0 102.4-46.08 102.4-102.4V307.2l-307.2-307.2z m102.4 819.2H307.2v-102.4h409.6v102.4z m0-204.8H307.2v-102.4h409.6v102.4z m-153.6-256V76.8l281.6 281.6H563.2z" p-id="3232"></path></svg>
          <span class="ml-10">更多介绍</span>
        </div>
        <div class="content-container">
          <div class="more-intro">
            {{ partyMember.introduction }}
          </div>
        </div>
      </div>
    </card-view>
  </base-content-layout>
</template>

<script lang="ts">
/**
 * 名称: 党员详情页面
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/17
 * 版本: V1
 */
import {defineComponent, ref} from 'vue';
import BaseContentLayout from "@/layout/BaseContentLayout.vue";
import CardView from "@/components/CardView.vue";
import MaxerBadge from "@/components/MaxerBadge.vue";
import {IPartyMember} from "@/models/IPartyMember";
import {BranchWorkService} from "@/api";
import {visageMap,postMap} from "@/utils/ConstantMap";

export default defineComponent({
  name: "MemberDetail",
  components: {MaxerBadge, CardView, BaseContentLayout},
  props: {
    id: String
  },
  setup(props) {
    console.log(props.id)
    const partyMember = ref<IPartyMember>({} as IPartyMember);


    // 初始化
    const init = ()=>{
      BranchWorkService.getPartyMemberDetail(parseInt(props.id as string)).then(res=>{
        partyMember.value = res.data as IPartyMember
        console.log(partyMember.value)
        partyMember.value.visage = visageMap(partyMember.value.visage as number);
        partyMember.value.post = postMap(partyMember.value.post as number);
      })
    }

    init();
    return {
      partyMember
    }
  }
})
</script>

<style lang="scss" scoped>
.detailBg {
  position: relative;
  margin-top: -20px;
  z-index: -1;
  width: 100%;
  height: 300px;
  background: url("../../../assets/img/detail_bg_1920.jpg") no-repeat;
  background-size: 100% 100%;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=");

  }
}
.info-container{
  box-sizing: border-box;
  background-color: #fff;
  padding: 0 10px 30px 10px;
  .container{
    .author-img{
      width: 260px;
      height: 260px;
      box-sizing: border-box;
      margin-top: -160px;
      border: 10px solid #ffffff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,.8);
    }
    .author-name{
      margin-left: 15px;
      font-size: 14px;
      .space{
        color: #828282;
      }
      .name{
        font-size: 2rem;
        font-weight: 600;
      }
    }
    .badge{
      min-width: 200px;
      margin: 0 20px;
    }
    .info{
      min-width: 400px;
      font-size: 13px;
      .info-col{
        margin-top: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}

.middle-container{
  padding: 15px;
  // 中部信息展示容器
  .head-title{
    position: relative;
    font-size: 1.8rem;
    padding-bottom: 5px;
    border-bottom: 1px solid #dddddd;
  }
  .content-container{
    padding: 15px 0 ;
    .more-intro{
      line-height: 25px;
      letter-spacing: 1.2px;
      text-indent: 32px;
    }
  }
}
</style>