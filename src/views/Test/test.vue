<template>
  <el-button @click="testRequest()">点我发送请求</el-button>
</template>

<script>
import axios from 'axios'
// import { Message } from 'element-ui'
export default {
  name: 'TestRequest',
  methods: {
    testRequest: function() {
      var user = { 'username': 'admin', 'password': '111111' }
      axios.post('/api/user/login', user).then((res) => {
        alert(res.data)
      })
    }
  }
}
</script>
