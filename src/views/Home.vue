<template>
  <div class="hoem">home</div>
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
<style scoped >

</style>
