<template>
  <el-collapse :model-value="['1','2','3','4']">
    <process-group title="发展确定对象" name="1">
      <process-item title="条件" first>
        经过一年以上培养教育和考察、基本具备党员条件的入党积极分子。
      </process-item>
      <process-item title="要求">
        听取党小组、培养联系人、党员和群众意见。
      </process-item>
      <process-item title="确定">
        支部委员会(不设支部委员会的由支部大会)讨论同意并报上级党委备案后可列为发展对象
      </process-item>
    </process-group>
    <process-group title="确定入党介绍人" name="2">
      <process-item title="数量" first>
        两名正式党员。
      </process-item>
      <process-item title="方式">
        入党介绍人一般由培养联系人担任，也可由党组织指定
      </process-item>
      <process-item title="注意">
        受留党察看处分、尚未恢复党员权利的党员，不能作入党介绍人
      </process-item>
      <process-item title="任务">
        <p>1.向发展对象解释党的纲领、章程，说明党员的条件、义务和权利;</p>
        <p>2.认真了解发展对象的入党动机、政治觉悟、道德品质、工作经历、现实表现等情况，如实向党组织汇报;</p>
        <p>3.指导发展对象填写《中国共产党入党志愿书》，并认真填写自己的意见;</p>
        <p>4.向支部大会负责地介绍发展对象的情况;发展对象批准为预备党员后，继续对其进行教育帮助。</p>
      </process-item>
    </process-group>
    <process-group title="进行政治审查" name="3">
      <process-item title="内容" first>
        对党的理论和路线、方针、政策的态度；政治历史和在重大政治斗争中的表现；遵纪守法和遵守社会公德情况;直系亲属和与本人关系密切的主要社会关系的政治情况。
      </process-item>
      <process-item title="方法">
        同本人谈话、查阅有关档案材料、找有关单位和人员了解情况以及必要的函调或外调。对流动人员中的发展对象进行政治审查时，还应征求其户籍所在地和居住地基层党组织的意见。
      </process-item>
      <process-item title="要求">
        政治审查必须严肃认真、实事求是,注重本人的一贯表现。审查情况应当形成结论性材料。
      </process-item>
      <process-item title="注意">
        凡是未经政治审查或政治审查不合格的,不能发展入党。
      </process-item>
    </process-group>
    <process-group title="开展短期集中培训" name="4">
      <process-item title="主体" first>
        基层党委或县级党委组织部门。
      </process-item>
      <process-item title="时间">
        不少于3天或24个学时。
      </process-item>
      <process-item title="内容">
        主要学习党章、《关于党内政治生活的若干准则》等文件。中央组织部组织编写的《入党教材》，可以作为学习辅导材料。
      </process-item>
      <process-item title="注意">
        未经培训的,除个别特殊情况外，不能发展入党。
      </process-item>
    </process-group>
  </el-collapse>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ProcessGroup from "@/components/ProcessGroup.vue";
import ProcessItem from "@/components/ProcessItem.vue";

export default defineComponent({
  name: "ExpandObject",
  components: {ProcessItem, ProcessGroup},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>