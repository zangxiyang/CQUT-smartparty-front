<template>
  <el-collapse :model-value="['1','2','3','4','5','6']">
    <process-group title="支部委员会审查" name="1">
      <process-item title="要求" first>
        <p>1.征求党员和群众的意见；</p>
        <p>2.对发展对象进行严格审查</p>
        <p>3.集体讨论是否合格</p>
      </process-item>
    </process-group>
    <process-group title="基层党委预审" name="2">
      <process-item title="前提" first>
        具有审批权限的基层党委。
      </process-item>
      <process-item title="内容">
        对发展对象的条件、培养教育情况等进行审查，根据需要听取执纪执法等相关部门的意见。
      </process-item>
      <process-item title="要求">
        审查结果以书面的形式通知党支部，并向审查合格的对象发放《中国共产党入党志愿书》。
      </process-item>
      <process-item title="注意">
        发展对象未来三个月内将离开工作、学习单位的，一般不办理接收预备党员的手续。
      </process-item>
    </process-group>
    <process-group title="填写入党志愿书" name="3">
      <process-item title="要求" first>
        在入党介绍人的指导下，由本人按照要求如实填写。
      </process-item>
    </process-group>
    <process-group title="支部大会讨论" name="4">
      <process-item title="程序" first>
        <p>1.发展对象汇报对党的认识、入党动机、本人履历、家庭和主要社会关系等情况；</p>
        <p>2.入党介绍人介绍发展对象有关情况，并对其是否入党表明意见；</p>
        <p>3.支部委员会报告对发展对象的审查情况；</p>
        <p>4.与会党员对发展对象能否入党进行充分讨论，并采取无记名投票的方式进行表决。</p>
      </process-item>
      <process-item title="注意">
        <p>1.具有表决权的到会人数必须超过应到会有表决权人数的半数，才能开会</p>
        <p>2.赞成人数超过应到会有表决权的正式党员的半数，才能通过接收预备党员的决议。</p>
        <p>3.因故不能到会的具有表决权的正式党员，在支部大会召开前正式向党支部提出书面意见的，应当统计在票数内。</p>
        <p>4.支部大会讨论两个以上的发展对象入党时，必须逐个讨论并表决。</p>
      </process-item>
      <process-item title="结果">
        形成支部大会决议，写入《中国共产党入党志愿书》，连同本人入党申请书、政治审查材料、培养教育考察材料等，一并报上级党委审批。
      </process-item>
    </process-group>
    <process-group title="派人谈话" name="5">
      <process-item title="时间" first>
        党委审批前
      </process-item>
      <process-item title="指派对象">
        党委委员活组织委员
      </process-item>
      <process-item title="目的">
        对发展对象作进一步的了解，并帮助其提高对党的认识。
      </process-item>
      <process-item title="要求">
        谈话人应将谈话情况和自己对发展对象能否入党的意见，如实填写在《中国共产党入党志愿书》上，并向党委汇报。
      </process-item>
    </process-group>
    <process-group title="党委审批" name="6">
      <process-item title="内容" first>
        审议发展对象是否具备党员条件、入党手续是否完备。
      </process-item>
      <process-item title="要求">
        <p>集体讨论和表决。</p>
        <p>两个以上的发展对象，应逐个审议和表决。</p>
      </process-item>
      <process-item title="时间">
        对党支部上报的接收预备党员的决议，应当三个月内审批，并报上级党委组织部门备案。特殊情况可适当延长，不得超过六个月。
      </process-item>
      <process-item title="注意">
        党总支、乡镇（街道）所属的基层党委以及党组织不能审批预备党员。除另有规定外，临时党组织不能接收、审批预备党员。
      </process-item>
    </process-group>
  </el-collapse>
</template>

<script lang="ts">
/**
 * 名称: 入党流程  - 》 预备党员的接收part
 * 说明:
 * 作者: Seale
 * 时间: 2021/6/20
 * 版本: V1
*/
import {defineComponent} from 'vue';
import ProcessGroup from "@/components/ProcessGroup.vue";
import ProcessItem from "@/components/ProcessItem.vue";

export default defineComponent({
  name: "Receive",
  components: {ProcessItem, ProcessGroup},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>