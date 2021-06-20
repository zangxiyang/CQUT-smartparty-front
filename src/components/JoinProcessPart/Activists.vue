<template>
  <el-collapse :model-value="['1','2','3']">
    <process-group title="推荐和确定入党积极分子" name="1">
      <process-item title="范围" first>
        已递交入党申请书且党组织已派人谈话的人员
      </process-item>
      <process-item title="方式">
        采取党员推荐、群团组织推优等方式产生人选。
      </process-item>
      <process-item title="决定">
        由支部委员会（不设支部委员会的由支部大会）研究决定，并报上级党委备案。
      </process-item>
    </process-group>

    <process-group title="指定培养联系人" name="2">
      <process-item title="数量" first>
        一至两名正式党员
      </process-item>
      <process-item title="任务">
        <p>1.向入党积极分子介绍党的基本知识;</p>
        <p>2.了解入党积极分子的政治觉悟、道德品质、现实表现和家庭情况等,做好培养教育工作,引导入党积极分子端正入党动机;</p>
        <p>3.及时向党支部汇报入党积极分子情况;</p>
        <p>4.向党支部提出能否将入党积极分子列为发展对象的意见</p>
      </process-item>
    </process-group>


    <process-group title="培养考察教育" name="3">
      <process-item title="方法" first>
        吸收入党积极分子听党课、参加党内有关活动、分配一定的社会工作以及集中培训等。
      </process-item>
      <process-item title="内容">
        马克思列宁主义、毛泽东思想和中国特色社会主义理论体系教育，党的路线、方针、政策和党的基本知识教育，党的历史和优良传统、作风教育以及社会主义核心价值观教育。
      </process-item>
      <process-item title="目的">
        使入党积极分子懂得党的性质、纲领、宗旨、组织原则和纪律，懂得党员的义务和权利，帮助其端正入党动机，确立为共产主义事业奋斗终身的信念。
      </process-item>
      <process-item title="要求">
        党支部每半年对入党积极分子进行1次考察;基层党委每年对入党积极分子队伍状况作1次分析
      </process-item>
      <process-item title="注意">
        <p>1.入党积极分子工作、学习所在单位（居住地）变动，应及时报告原单位（居住地)党组织;</p>
        <p>2.原单位(居住地)党组织应及时将培养教育等有关材料转交现单位(居住地)党组织;</p>
        <p>3.现单位（居住地)党组织应对有关材料进行认真审查，并接续做好培养教育工作。培养教育时间可连续计算。</p>
      </process-item>
    </process-group>
  </el-collapse>
</template>

<script lang="ts">
/**
 * 名称: 入党流程 -> 入党积极分子的确定和培养教育
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent} from 'vue';
import MaxerBadge from "@/components/MaxerBadge.vue";
import ProcessItem from "@/components/ProcessItem.vue";
import ProcessGroup from "@/components/ProcessGroup.vue";

export default defineComponent({
  name: "Activists",
  components: {ProcessGroup, ProcessItem},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>