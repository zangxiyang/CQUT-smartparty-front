<template>
  <footer id="maxer-footer">
    <div class="maxer-container">

      <div class="f-jc-c al-c">
        <icon-font name="iconcopyright" right="3px"/>
        <span class="mr-5">{{ date }}</span>
        <a href="JavaScript:" class="website-name mr-5">站点名称vuex首屏加载</a>
        <span>All Rights Reserved.</span>
      </div>
      <a class="f-jc-c al-c mt-5" href="https://beian.miit.gov.cn/" target="_blank">
        <icon-font name="iconICP" right="3px"/>
        <span>渝ICP备16011563号-3</span>
      </a>
      <div class="f-jc-c al-c mt-5">
        <span>Powered by</span>
        <a href="Javascript:" class="ml-5">Maxer</a>
      </div>
      <div class="bottom-state f-jc-c al-c mt-5">
        <div class="state-item">
          <el-tooltip placement="top" effect="light" content="本站托管于阿里云" :offset="35">
            <a href="https://www.aliyun.com/" target="_blank">
              <icon-font name="iconaliyun1" size="80px"/>
            </a>
          </el-tooltip>
        </div>
        <div class="state-item">
          <el-tooltip placement="top" effect="light" content="本站每日一言由 'Hitokoto' 提供">
            <a href="https://hitokoto.cn/" target="_blank">
              一言

            </a>
          </el-tooltip>
        </div>
        <div class="state-item">
          <el-tooltip placement="top" effect="light" content="本站CDN加速由又拍云提供" :offset="30">
            <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank">
              <icon-font name="iconyoupaiyun-copy-copy-copy" size="70px"/>
            </a>
          </el-tooltip>
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
  components: {IconFont},
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
  }
}
</style>