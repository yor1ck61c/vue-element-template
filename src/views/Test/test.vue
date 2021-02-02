<template>
  <el-button @click="testRequest()">点我发送请求</el-button>
</template>

<script>
import axios from 'axios'
import { Message } from 'element-ui'
export default {
  name: 'TestRequest',
  methods: {
    testRequest: function() {
      var dto = { 'PatientID': '张学友', 'PatientName': '中国香港' }
      axios.post('/api/Services/Medical/PatientManage.svc/AddPatient', dto).then((res) => {
        alert(dto)
        Message.success({
          message: '解决跨域!'
        })
      })
    }
  }
}
</script>
