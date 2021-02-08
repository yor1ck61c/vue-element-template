<template>
  <el-container>
    <el-main>
      <el-row style="width: 50px;height: 100px;">
        <el-image />
      </el-row>
      <el-row>
        <el-image />
        <el-image />
        <el-image />
      </el-row>
      <el-row>
        <div>
          <div style="text-align: left;margin-top: 20px; font-size:13px; line-height:1.7">
            身份证号：{{ ResidentInfo.ID }}<br>
            姓名：{{ ResidentInfo.Name }}<br>
            性别：{{ ResidentInfo.Gender }}<br>
            出生日期：{{ ResidentInfo.Birthday }}<br>
            年龄：{{ ResidentInfo.Age }}<br>
            民族：{{ ResidentInfo.Nation }}<br>
            户籍地址：{{ ResidentInfo.Address }}
          </div>
        </div>
      </el-row>
      <el-row>
        <el-button type="primary" style="margin: 5px; width: 100%;margin-top: 13px;">已开通APP</el-button>
        <el-button type="primary" style="margin: 5px; width: 100%">在线交流</el-button>
        <el-button type="primary" style="margin: 5px; width: 100%">生成健康报告</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'ResidentInfoCard',
  data() {
    return {
      'ResidentInfo': {
        ID: '2'
      },
    }
  },
  mounted() {
    this.ResidentInfo.ID = this.$route.params.ID
  }
}
</script>
