<template>
  <el-container>
    <el-main style="line-height: 60px; color: #909399">
      <el-row>
        <el-col :span="8">
          <el-button type="primary" plain @click="back()">返回</el-button>
        </el-col>
        <el-col :span="8" style="text-align: center; font-weight: bold; font-size: 20px">预警处理</el-col>
        <el-col :span="8" />
      </el-row>
      <el-row v-model="ResidentInfo" style="line-height:30px; margin-left: 10px; font-weight: bold">
        <el-col :span="4">姓名：{{ ResidentInfo.Name }}</el-col>
        <el-col :span="5">性别：{{ ResidentInfo.Sex }}</el-col>
        <el-col :span="5">年龄：{{ ResidentInfo.Age }}</el-col>
        <el-col :span="5">电话：{{ ResidentInfo.Tel }}</el-col>
        <el-col :span="5">居民身份证：{{ ResidentInfo.Idcard }}</el-col>
      </el-row>
      <el-row v-model="WarningInformation">
        <el-col :span="2" style="line-height: 120px; text-align: center; border: 1px solid #DCDFE6">预警信息</el-col>
        <el-col :span="22" style="border: 1px solid #DCDFE6">
          <div style="margin-left:20px">
            <span style="display: block; width: 300px; float: left">检测指标：{{ WarningInformation.TestIndex }}</span>
            <span style="display: block; width: 300px; float: left">检测值：{{ WarningInformation.TestValue }}</span>
            <span style="display: block; width: 300px; float: left">分析结果：{{ WarningInformation.AnalysisResults }}</span>
            <span style="display: block; width: 300px; float: left">检测时间：{{ WarningInformation.TestTime }}</span>
          </div>
          <div style="margin-left:20px">
            <span style="display: block; width: 300px; float: left">预警时间：{{ WarningInformation.WarningTime }}</span>
            <span style="display: block; width: 300px; float: left">预警类型名称：{{ WarningInformation.WarningTypes }}</span>
            <span style="display: block; width: 300px; float: left">预警描述：{{ WarningInformation.WarningDescription }}</span>
            <span style="display: block; width: 300px; float: left">参考值：{{ WarningInformation.ReferenceValue }}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="DiagnosisTable" stripe style="width: 100%; line-height: 30px; border: 1px solid #DCDFE6">
          <el-table-column prop="diagnosis" label="确诊疾病" />
          <el-table-column prop="diagnosisTime" label="确诊时间" />
          <el-table-column prop="diseaseCourse" label="病程（月）" />
          <el-table-column prop="responsibleDoctor" label="责任医生" />
          <el-table-column prop="responsibleDepartment" label="责任科室" />
          <el-table-column prop="responsibleHospital" label="责任医院" />
        </el-table>
      </el-row>
      <el-row>
        <el-col :span="2" style="border: 1px solid #DCDFE6; line-height: 210px; text-align: center">处理信息</el-col>
        <el-col :span="22" style="border: 1px solid #DCDFE6">
          <el-form ref="form" :model="handleInfosForm" label-width="80px">
            <el-form-item label="处理医生" style="margin-top: 10px;">
              <el-input v-model="handleInfosForm.HandleDoctor" style="width: 150px" />
              <el-button type="primary" plain style="margin-left: 10px">在线交流</el-button>
              <el-button type="primary" plain>去干预</el-button>
              <el-button type="primary" plain>去随访</el-button>
            </el-form-item>
            <el-form-item label="处理意见">
              <el-radio-group v-model="handleInfosForm.option">
                <el-radio label="继续观察" />
                <el-radio label="继续服药" />
                <el-radio label="门诊复查" />
                <el-radio label="其它" />
              </el-radio-group>
            </el-form-item>
            <el-form-item style="margin-right: 75px;">
              <el-input v-model="handleInfosForm.optionText" type="textarea" :rows="2" placeholder="请输入处理意见" />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="text-align: center; margin-top: 10px">
      <el-button type="primary" plain>保存</el-button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'HandleAlertPage',
  data() {
    return {
      ResidentInfo: {
        Name: '老八',
        Sex: '老八',
        Age: '老八',
        Tel: '老八',
        Idcard: '老八'
      },
      WarningInformation: {
        TestIndex: '老八',
        TestValue: '老八',
        AnalysisResults: '老八',
        TestTime: '老八',
        WarningTime: '老八',
        WarningTypes: '老八',
        WarningDescription: '老八',
        ReferenceValue: '老八'
      },
      DiagnosisTable: [],
      handleInfosForm: {
        HandleDoctor: '老八',
        option: '老八',
        optionText: '老八'
      }
    }
  },
  methods: {
    back: function() {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
