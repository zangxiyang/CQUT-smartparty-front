<template>
  <footer id="maxer-footer">
    <div class="maxer-container">

      <div class="f-jc-c al-c">
        <icon-font name="iconcopyright" right="3px"/>
        <span class="mr-5">{{ date }}</span>
        <a href="JavaScript:" class="website-name mr-5">重庆理工大学智慧党建平台</a>
        <span>All Rights Reserved.</span>
      </div>
      <div class="f-jc-c mt-5">
        <a class="flex al-c" href="https://beian.miit.gov.cn/" target="_blank" style="margin: 5px auto">
            <svg t="1623815104264" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6896" width="200" height="200"><path d="M97.9 389.3c7.1 4.2 13.1 10.1 19.8 15.1 9.5 7.1 19.1 14 28.4 20.9 14.3-31.5 27.9-61.6 42.2-92.9-22.1-3.9-44.7-8.2-67.5-11.5-3-0.4-8.2 3.7-9.9 7-6.9 13.3-12.8 27-19 40.6-3.9 8.6-3.1 15.4 6 20.8z m116.8-97.5c26.4-22.8 51.7-44.6 77.9-67.3-18.8-13-37.8-26.5-57.4-39.2-2.6-1.7-9.4-0.5-12.2 1.8-13.1 10.7-25.8 22.1-38.1 33.8-2.1 2-3.2 7.3-2 9.8 10.2 20.4 21 40.5 31.8 61.1z m124.7-89.9c28.9-8.4 57.8-16.9 86.8-25.1 7.4-2.1 6.4-5.5 3.4-10.6-10-17.1-19.3-34.6-30-51.2-2.2-3.5-9.5-6.6-13.5-5.7-15.6 3.5-30.9 8.4-46.1 13.4-2.8 0.9-6.3 5.1-6.4 7.8-0.5 23.4-0.3 46.9-0.3 70.4 4.7 0.8 5.5 1.2 6.1 1zM136.1 475.5c-2.9-0.6-4.1-1.2-5.1-0.9-19.5 5-39 9.9-58.3 15.7-2.9 0.9-6.1 6.6-6.2 10.1-0.3 17.3 0 34.6 1.2 51.8 0.3 3.6 4.7 9 8.1 9.9 19.7 5.2 39.8 9.3 60.2 13.9V475.5zM586 174.6c-1-13.8-1.3-27.7-3.6-41.2-5-30 2.5-25.5-28.9-30.8-3.7-0.6-7.4-1.3-11.1-1.9-26.4-4-26.6-4-37.4 20-7.3 16.2-13.7 32.7-20.4 48.7 34.3 4.9 67.2 9.5 101.5 14.4-0.1-2.8 0.1-6.1-0.1-9.2zM741.9 194c0.8-2.4-1.9-7.3-4.4-9.1-13.4-9.8-27-19.3-41-28-3-1.8-9.6-1.8-12.1 0.3-18 15.4-35.3 31.5-52.6 47.1 29.2 19.9 56.9 38.9 85.6 58.5 8.3-22.7 16.8-45.6 24.5-68.8zM504.2 862.8c8.1 17.4 16.2 35.5 25.2 53 1.5 2.9 7.5 5.6 10.9 5.1 17.9-2.9 35.8-6.3 53.4-10.8 3.6-0.9 7.8-7 8.3-11.2 1.6-12.6 1.7-25.4 2.2-38.2 0.2-6.5 0-13 0-19.2-34.2 7.3-66.3 14.1-100 21.3z m245.3-63.9c-5.6-13.5-11.2-27-16.7-40.3-28.6 21.9-55.7 42.7-83.5 64 16.4 13.7 31.6 26.9 47.6 39.2 2.6 2 9.6 1.3 12.9-0.8 11-6.8 21.4-14.6 31.7-22.4 18.1-13.5 18-13.6 9.6-34.3-0.7-1.6-0.9-3.6-1.6-5.4z m-208.2-49.7c-56.9-1.8-109.9-17.9-154.9-53-71.7-56-97.9-132.6-85.1-220.5 11.1-76.7 57-132.3 125.6-165.9 55-27 114.2-32.2 172.7-9.9 45.6 17.4 70.5 53.1 52.4 106.5-11.5 33.8-35.6 57.5-64.7 76.4-34.2 22.3-70.8 37.5-112.7 34.6-40.8-2.9-59.4-33.1-43.8-71 3-7.3 7.4-14 11.2-20.9-21.1 19.5-38.3 42-44 71.3-4.7 24.7 9.3 50 32.2 58.7 21.9 8.4 44.6 11.5 67.8 8.7 75.2-9.1 140.2-40 194.6-92.8 60.1-58.3 58.9-152.2-4.2-204.7-55-45.7-118.8-71.6-190.8-73.4-81.4-2.1-156.2 18.5-220.7 70.2-64 51.5-104.5 117.8-118.6 198.8-9.9 56.8-4.6 112.8 15.9 167.3 26 69.1 68 125 130.9 164.3 87.2 54.5 180.7 64.9 278.2 36.3 87-25.5 147.3-84.3 190.9-162.1 1.4-2.5 1.8-5.6 2.7-8.4-13.2 9.1-23.9 19.9-35.9 28.8-59.3 43.8-126.4 63-199.7 60.7z m-94.2 110.7c-14.5-1.7-29-4-43.2-7.2-15.2-3.4-30.1-8.2-47.3-12.9 0 21.4-0.2 41.1 0.3 60.8 0.1 2.6 3.5 6.8 6.2 7.5 18.1 4.8 36.3 9.1 54.6 12.7 3 0.6 8.5-1.6 10-4.2 9-15.1 17.1-30.6 25.5-46 3.6-6.7 2.2-9.7-6.1-10.7z m-246.9-50.3c-1.1 2.5 0.7 7.9 2.9 9.8 14.3 12.2 29.1 24 44 35.5 2.3 1.8 7.3 3 9.1 1.7 17.3-12.4 34.1-25.3 51-38-27.5-22.3-53.4-43.3-81.2-65.8-8.7 18.9-17.6 37.7-25.8 56.8z m-99.6-144.3c-2.1 1.9-2.8 8-1.5 10.8 7.6 16.1 15.8 32 24.5 47.6 1.6 2.9 6.6 6.3 9.4 5.8 20.7-3.7 41.3-8.3 61.1-12.4L148 625.2c-15.9 13.3-31.9 26.4-47.4 40.1z" fill="#ED4201" p-id="6897"></path><path d="M928.2 349.2c-14.5-33.7-43.7-48.8-75.4-58.7-19.9-6.2-40.6-8.9-61.5-9.5-10.3-0.3-20.6-0.2-31 0.3-9.2 0.4-18.6 1.4-27.9 3.7 5 1.2 40.3 11 55.7 19 1.1 0.6 2.1 1.1 3.2 1.7 20.3 11.5 32.8 28.9 33.6 53.7 1 31.8-13.1 57.9-31.7 82-0.6 0.8-1.3 1.6-1.9 2.3-18.5 23.4-40.5 43.1-64.6 60.7-46.3 33.7-97.2 57.9-152.2 72.4-41.7 11-84.2 14.2-127.1 5-45.3-9.7-76.5-49.4-58.1-98 3.1-8.2 6.2-16.5 9.3-24.7-15.3 19.6-26.8 40.2-29.6 65.5-3.6 33.5 10.4 58.6 35.8 77.3 31.7 23.4 69.7 29.2 107.7 30.5 24.6 0.8 49.5-3.4 74.1-5.9 42.8-4.4 83.5-17 123-33.1 28.2-11.5 55.7-24.5 81.7-40 16.6-9.9 32.5-20.8 47.7-33.1 34-27.7 66.3-57.2 84.1-98.6 10.1-23.4 16-47.2 5.1-72.5z" fill="#035DB6" p-id="6898"></path></svg>
            <span>备案号</span>
        </a>
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
          <!--todo-->
        </div>
        <div class="state-item">
          <el-button class="footer-bottom-button">
            <svg t="1623814418072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3993" width="200" height="200"><path d="M512.3 79.2C735.6 163 871.2 430.8 755.1 647.8L471.7 363l108.2-108.6-67.6-67.3c-37.3 36.6-96.6 44.4-136.6 28.2L160.3 430.9l122 121.5 81.3-81 283.2 284.3c-138.6 76.1-330.7 52.1-472.5-95.2L105.6 729c20.6 28.5 37.8 54.4 59.2 76-1.9 2.2-7.8 7.1-7.9 7.2-3.6-0.6-7.9-2-11.7-2-36.5 0-66 31.8-66 68.4 0 36.5 29.8 66.3 66.3 66.3 36.6 0 67.8-30.1 67.8-66.6 0-4.3-1-8.2-1.7-12.2l10.6-10.4c163 110 341.7 123.7 533.9 8.6l79.4 79.7 108.7-107.2-79.9-80.8c229.3-345.5-76.5-685.1-352-676.8z" p-id="3994"></path></svg>
            <span style="margin-left: 5px">关于我们</span>
          </el-button>
        </div>
      </div>
      <!--如果不需要直接注释掉-->
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