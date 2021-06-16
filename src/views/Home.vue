<template>
  <input type="text" v-model="Account" placeholder="请输入账号" name="username" >
  <input type="text" v-model="Password" placeholder="请输入密码" name="username" >
  <button @click.prevent="handleLogin()">登录</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
//引入接口
import { UserService } from '@/api'

export default defineComponent({
  setup() {
    const state = reactive({
      Account: 'admin', //账户
      Password: 'hhhh', //密码
    })

    const handleLogin = async () => {
      const loginParams = {
        username: state.Account,
        password: state.Password,
      }
      const res = await UserService.login()
      console.log(res)
    }


    return {
      ...toRefs(state),
      handleLogin
    }
  },
})
</script>
