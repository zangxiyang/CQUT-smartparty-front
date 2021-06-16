<template>
  <footer id="maxer-footer">
    <div class="maxer-container">

      <div class="f-jc-c al-c">
        <icon-font name="iconcopyright" right="3px"/>
        <span class="mr-5">{{ date }}</span>
        <a href="JavaScript:" class="website-name mr-5">重庆理工大学智慧党建平台</a>
        <span>All Rights Reserved.</span>
      </div>
      <a class="f-jc-c al-c mt-5" href="https://beian.miit.gov.cn/" target="_blank">
        <icon-font name="iconICP" right="3px"/>
        <span>备案号</span>
      </a>
      <div class="bottom-state f-jc-c al-c mt-5">
        <div class="state-item">
          <el-tooltip placement="top" effect="light" content="本站托管于阿里云" :offset="35">
            <a href="https://www.aliyun.com/" target="_blank">
              <icon-font name="iconaliyun1" size="80px"/>
            </a>
          </el-tooltip>
        </div>
        <div class="state-item">
          <!--todo-->
        </div>
        <div class="state-item">
          <el-button class="footer-bottom-button">
            <svg t="1623814418072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3993" width="200" height="200"><path d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z" p-id="3994"></path></svg>
            <span style="margin-left: 5px">关于我们</span>
          </el-button>
        </div>
      </div>
      <div class="f-jc-c al-c">
        <span class="mr-5">本站颤颤巍巍地存活了</span>
        <span>{{ lifeTime }}</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: "Footer",
  setup() {
    const date = ref<string>(new Date().getFullYear().toString());
    return {date}
  },
  data(){
    return{
      now: 0,
      lifeTime: '' as string|null,
      startTime: '2018/08/19'
    }
  },
  watch:{
    now(){
      this.lifeTime = this.calcLifeTime(this.startTime);
    }
  },
  computed: {

  },
  created() {
    this.lifeTime = this.calcLifeTime(this.startTime)
    setInterval(()=>{
      this.now = new Date().getTime();
    },1000)
  },
  methods: {
    /**
     * 计算开始的时间
     * @param startDate 格式为 2018/08/02
     */
    calcLifeTime(startDate: string): string | null {
      const currentTime = new Date().getTime() / 1000;
      let diffTime = currentTime - (new Date(startDate).getTime() / 1000);
      let result = "";

      const minuteSums = 60
          , hourSums = minuteSums * 60
          , daySums = hourSums * 24
          , monthSums = daySums * 30
          , yearSums = monthSums * 12

      if (diffTime > 0) {
        // 先进行判断时间是否足年
        if (diffTime > yearSums) {
          const year = Math.floor(diffTime / yearSums);
          diffTime %= yearSums;
          result += year + "年";
        }
        if (diffTime > monthSums) {
          // 如果当前时间足月
          const month = Math.floor(diffTime / monthSums);
          diffTime %= monthSums;
          result += `${month}月`;
        }
        if (diffTime > daySums) {
          // 当前时间足天
          const day = Math.floor(diffTime / daySums);
          diffTime %= daySums;
          result += `${day}天`
        }
        if (diffTime > hourSums) {
          // 当前时间足小时
          const hour = Math.floor(diffTime / hourSums);
          diffTime %= hourSums;
          result += `${hour}时`;
        }
        if (diffTime > minuteSums) {
          // 当前时间足分钟
          const minute = Math.floor(diffTime / minuteSums);
          diffTime %= minuteSums;
          result += `${minute}分`
        }
        // 加上秒
        result += `${Math.floor(diffTime)}秒`

        return result;
      }
      return null;
    }
  }
})
</script>

<style lang="scss" scoped>
#maxer-footer {
  background-color: rgba(255, 255, 255, .8);
  font-size: 14px;
  padding: 25px 0;
  user-select: none;
  -webkit-user-select: none;

  a {
    color: #ac633b;
  }

  .website-name {

  }

  .bottom-state {
    max-height: 40px;
    overflow: hidden;

    .state-item {
      margin-left: 5px;

      a {
        font-family: serif;
        font-weight: 600;
      }

    }
    .footer-bottom-button{
      svg{
        color: #c22424;
      }
      &:hover{
        svg{
          color: #ffffff;
        }
      }
    }
    ::v-deep{
      // 重置elementPlus按钮
      .el-button{
        //border: none;
        min-height: 30px;
        padding: 8px 15px;

        &:focus{
          border-color: #c22424;
          color: #c22424;
        }
        &:hover{
          color: #ffffff;
          background-color: #c22424;
        }
      }
    }
  }
}
</style>