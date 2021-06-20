<template>
<el-collapse :model-value="['1','2','3','4','5','6','7']">
  <process-group title="编入党支部和党小组" name="1">
    <process-item title="要求" first>
      党组织应当及时将上级党委批准的预备党员编入党支部和党小组，对预备党员继续进行教育和考察。
    </process-item>
  </process-group>
  <process-group title="入党宣誓" name="2">
    <process-item title="形式" first>
      预备党员必须面向党旗进行入党宣誓
    </process-item>
    <process-item title="组织">
      由基层党委或党支部(党总支）组织进行
    </process-item>
    <process-item title="程序">
      奏《国际歌》;党组织负责同志致辞;预备党员宣誓;参加宣誓的预备党员发言;党组织负责同志讲话、提出要求。
    </process-item>
    <process-item title="要求">
      正式场合;严肃认真;严密紧凑
    </process-item>
  </process-group>
  <process-group title="教育和考察" name="3">
    <process-item title="方式" first>
      参加党的组织生活、听取个人汇报、个别谈心、集中培训、实践锻炼等
    </process-item>
    <process-item title="时间">
      预备期一年。预备期从支部大会通过其为预备党员之日算起
    </process-item>
    <process-item title="注意">
      预备党员转为正式党员、延长预备期或取消预备党员资格，应当经支部大会讨论通过和上级党组织批准
    </process-item>
  </process-group>
  <process-group title="提出书面转正申请" name="4">
    <process-item title="要求" first>
      预备期满,本人向党支部提出书面转正申请
    </process-item>
  </process-group>
  <process-group title="支部大会讨论" name="5">
    <process-item title="准备" first>
      党小组提出意见;党支部征求党员和群众的意见;支部委员会审查
    </process-item>
    <process-item title="程序">
      与讨论接收预备党员的支部大会相同
    </process-item>
    <process-item title="结果">
      认真履行党员义务、具备党员条件的，应当按期转为正式党员;需要继续考察和教育的，可以延长一次预备期,延长时间不能少于半年,最长不超过一年;不履行党员义务、不具备党员条件的，应当取消其预备党员资格
    </process-item>
  </process-group>
  <process-group title="上级党委审批" name="6">
    <process-item title="时间" first>
      党支部上报的预备党员转正的决议，应当在三个月内审批
    </process-item>
    <process-item title="要求">
      审批结果应及时通知党支部。党支部书记应当同本人谈话，并将审批结果在党员大会上宣布
    </process-item>
    <process-item title="注意">
      党龄从预备期满转为正式党员之日算起
    </process-item>
  </process-group>
  <process-group title="材料存档" name="7">
    <process-item title="内容" first>
      预备党员转正后，党支部应当及时将其《中国共产党入党志愿书》、入党申请书、政治审查材料、转正申请书和培养教育考察材料，交党委存入本人人事档案
    </process-item>
    <process-item title="注意">
      无人事档案的,建立党员档案,由所在党委或县级党委组织部门保存
    </process-item>
  </process-group>
</el-collapse>
</template>

<script lang="ts">
/**
 * 名称: 入党流程 -> 转正 最后party
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent} from 'vue';
import ProcessGroup from "@/components/ProcessGroup.vue";
import ProcessItem from "@/components/ProcessItem.vue";

export default defineComponent({
  name: "BecomeFormal",
  components: {ProcessItem, ProcessGroup},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>