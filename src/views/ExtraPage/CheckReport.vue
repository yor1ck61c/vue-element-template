<template>
  <el-container>
    <el-aside style="width: 300px">
      <el-button type="primary" style="margin-left: 20px; margin-top: 20px">返回</el-button>
    </el-aside>
    <el-main>
      <el-row v-model="ReportInfos" style="text-align: center">
        <div>
          <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF; font-size: 20px">
            <span>个人健康月综合评估报告</span>
          </div>
        </div>
        <div>
          <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
            <span>报告人：{{ ReportInfos.Reporter }}</span>
          </div>
        </div>
        <div>
          <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
            <span>（报告时间：{{ ReportInfos.Time }}）</span>
          </div>
        </div>
      </el-row>
      <el-row v-model="BasicInfos" style="font-size: 13px">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF; font-size: 16px">
          <span>基本信息</span>
        </div>
        <div style="border: solid 1px #DCDFE6; line-height: 30px; color: #909399">
          <div style="margin-bottom: 20px;">
            <div style="width: 60px; height:100px; float: left">
              <div style="border: solid 1px #DCDFE6; width:60px; height:98px; margin-left:5px; margin-top:5px"><!--图片--></div>
            </div>
            <div style="float: left; width: 800px; height: 100px">
              <div style="height: 30px; margin-top: 5px; margin-left: 10px">
                <span style="display: block; width: 260px; float: left">身份证号：{{ BasicInfos.Idcard }}</span>
                <span style="display: block; width: 260px; float: left">姓名：{{ BasicInfos.Name }}</span>
                <span style="display: block; width: 260px; float: left">出生日期：{{ BasicInfos.Birthday }}</span>
              </div>
              <div style="border: 1px solid #DCDFE6; margin-left: 10px"><!--横线--></div>
              <div style="height: 30px; margin-left: 10px">
                <span style="display: block; width: 260px; float: left">年龄：{{ BasicInfos.Age }}</span>
                <span style="display: block; width: 260px; float: left">性别：{{ BasicInfos.Sex }}</span>
                <span style="display: block; width: 260px; float: left">民族：{{ BasicInfos.Nation }}</span>
              </div>
              <div style="border: 1px solid #DCDFE6; margin-left: 10px"><!--横线--></div>
              <div style="height: 30px; margin-left: 10px">
                <span style="display: block; width: 260px; float: left">本人电话：{{ BasicInfos.Tel }}</span>
                <span style="display: block; width: 260px; float: left">紧急联系人：{{ BasicInfos.Contact }}</span>
                <span style="display: block; width: 260px; float: left">紧急人电话：{{ BasicInfos.ContactTel }}</span>
              </div>
              <div style="border: 1px solid #DCDFE6; margin-left: 10px"><!--横线--></div>
            </div>
          </div>
          <div style="clear: both;">
            <div style="margin-left: 10px;">户籍地址：{{ BasicInfos.PermanentAddress }}</div>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">现地址：{{ BasicInfos.Address }}</div>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">
              <span style="display: block; width: 245px; float: left">血型：{{ BasicInfos.BloodType }}</span>
              <span style="display: block; width: 100px; float: left;">RH：{{ BasicInfos.RH }}</span>
            </div>
            <br>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">婚姻状况：{{ BasicInfos.MaritalStatus }}</div>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">疾病史：{{ BasicInfos.IllHistory }}</div>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">
              <span style="display: block; float: left">家族史：</span>
              <span style="display: block; width: 180px; float: left;">父亲：{{ BasicInfos.Dad }}</span>
              <span style="display: block; width: 180px; float: left;">母亲：{{ BasicInfos.Mom }}</span>
              <span style="display: block; width: 240px; float: left;">兄弟姐妹：{{ BasicInfos.BroSis }}</span>
              <span style="display: block; width: 200px; float: left">子女：{{ BasicInfos.Son }}</span>
            </div>
            <br>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">遗传病史：{{ BasicInfos.GeneticHistory }}</div>
            <hr style="margin-left: 10px; margin-right: 16px; background-color: #dcdfe6; height: 1px; border: none">
            <div style="margin-left: 10px">过敏原：{{ BasicInfos.Allergen }}</div>
          </div>
        </div>
      </el-row>
      <el-row v-model="DiagnosisInfos">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>确诊信息</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="DiagnosisInfos.DiagnosisIll" label="确诊疾病" />
          <el-table-column prop="DiagnosisInfos.DiagnosisTime" label="确诊时间" />
          <el-table-column prop="DiagnosisInfos.CourseOfDiseaseTime" label="病程时间" />
        </el-table>
      </el-row>
      <el-row v-model="HealthAssessment">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>健康评估摘要</span>
        </div>
        <div style="border: solid 1px #DCDFE6; height: 100px">
          <p style="margin-left: 10px; margin-top: 10px; margin-right:10px">{{ HealthAssessment.Summary }}</p>
        </div>
        <div style="border: solid 1px #DCDFE6; height: 400px">
          <div ref="CardiovascularDiseaseTenYearRiskChart" style="width: 500px; height: 300px; float: left; margin-top: 50px;" />
          <el-table :data="tableData" border style="width: 35%; float: right">
            <el-table-column prop="HealthAssessment.Name" label="名称" />
            <el-table-column prop="HealthAssessment.Level" label="等级" />
          </el-table>
        </div>
      </el-row>
      <el-row v-model="LatestTestIndex">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>最新检测指标</span>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="LatestTestIndex.InspectionItems" label="检查项目" />
          <el-table-column prop="LatestTestIndex.TimeOfDiagnosis" label="最新检测结果" />
          <el-table-column prop="LatestTestIndex.NormalRangeValue" label="正常范围值" />
          <el-table-column prop="LatestTestIndex.AnalysisResults" label="分析结果" />
          <el-table-column prop="LatestTestIndex.InspectionTime" label="检查时间" />
        </el-table>
      </el-row>
      <el-row>
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>血压</span>
        </div>
      </el-row>
      <el-row :v-model="BloodPressure" :gutter="5">
        <el-col :span="16">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均趋势（单位：mmHg）</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均值：{{ BloodPressure.Avg }}</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">11</div>
        </el-col>
        <el-col :span="8">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; margin-left: 5px; margin-top: 5px">检测分布</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">11</div>
        </el-col>
      </el-row>
      <el-row>
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>餐后2h血糖</span>
        </div>
      </el-row>
      <el-row :v-model="BloodSuger" :gutter="5">
        <el-col :span="16">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均趋势（单位：mmol/L）</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均值：{{ BloodSuger.Avg }}</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">最高值：{{ BloodSuger.Max }}</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">最低值：{{ BloodSuger.Min }}</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">22</div>
        </el-col>
        <el-col :span="8">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; margin-left: 5px; margin-top: 5px">检测分布</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">22</div>
        </el-col>
      </el-row>
      <el-row>
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>总胆固醇</span>
        </div>
      </el-row>
      <el-row :v-model="Cholesterol" :gutter="5">
        <el-col :span="16">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均趋势（单位：mmol/L）</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">平均值：{{ Cholesterol.Avg }}</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">最高值：{{ Cholesterol.Max }}</span>
            <span style="display: block; float: left; margin-left: 5px; margin-top: 5px">最低值：{{ Cholesterol.Min }}</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">33</div>
        </el-col>
        <el-col :span="8">
          <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height:30px; color: #909399">
            <span style="display: block; margin-left: 5px; margin-top: 5px">检测分布</span>
          </div>
          <div style="border: solid 1px #DCDFE6; height:170px">33</div>
        </el-col>
      </el-row>
      <el-row v-model="InterventionStatus">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>干预状况</span>
        </div>
        <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height: 30px; color: #909399">
          <span style="display: block; margin-left: 5px; margin-top: 5px">心脏疾病</span>
        </div>
        <div style="color: #909399">
          <table border="1" cellspacing="0" width="879px" style="line-height:1.7; font-size:13px; border: solid 1px #d2d2d2 ">
            <tr>
              <td style="width: 300px"><div style="margin-left: 5px;">本期治疗计划</div></td>
              <td>
                <div>{{ HDInterventionStatus.CourseOfTreatment }}</div>
                <div>{{ HDInterventionStatus.BloodPressureControlTarget }}</div>
              </td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">药物指导</div></td>
              <td>{{ HDInterventionStatus.Medicine }}</td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">生活指导</div></td>
              <td>{{ HDInterventionStatus.FoodAdvice }}</td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">医嘱</div></td>
              <td>{{ HDInterventionStatus.DoctorAdvice }}</td>
            </tr>
          </table>
        </div>
        <div style="border: solid 1px #DCDFE6; background-color: #DCDFE6; height: 30px; color: #909399; margin-top: 10px;">
          <span style="display: block; margin-left: 5px; margin-top: 5px">高血压</span>
        </div>
        <div style="color: #909399">
          <table border="1" cellspacing="0" width="879px" style="line-height:1.7; font-size:13px; border: solid 1px #d2d2d2 ">
            <tr>
              <td style="width: 300px"><div style="margin-left: 5px;">本期治疗计划</div></td>
              <td>
                <div>{{ HDInterventionStatus.CourseOfTreatment }}</div>
                <div>{{ HDInterventionStatus.BloodPressureControlTarget }}</div>
              </td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">药物指导</div></td>
              <td>{{ HDInterventionStatus.Medicine }}</td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">生活指导</div></td>
              <td>{{ HDInterventionStatus.FoodAdvice }}</td>
            </tr>
            <tr>
              <td><div style="margin-left: 5px;">医嘱</div></td>
              <td>{{ HDInterventionStatus.DoctorAdvice }}</td>
            </tr>
          </table>
        </div>
      </el-row>
      <el-row v-model="FollowUpReport">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>随访报告</span>
        </div>
        <div style="border: solid 1px #DCDFE6; height: 200px">
          <p style="margin-left: 10px; margin-top: 10px; margin-right:10px">{{ FollowUpReport.Text }}</p>
        </div>
      </el-row>
      <el-row v-model="SurveyOfDetection">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>检测概况</span>
        </div>
        <div style="border: solid 1px #DCDFE6; height: 200px">
          <p style="margin-left: 10px; margin-top: 10px; margin-right:10px">{{ SurveyOfDetection.Text }}</p>
        </div>
      </el-row>
      <el-row v-model="MedicalAdvice">
        <div style="margin-top: 10px; margin-bottom: 5px; color: #1E90FF">
          <span>医嘱建议</span>
        </div>
        <el-form>
          <el-form-item>
            <el-input type="textarea" />
          </el-form-item>
        </el-form>
      </el-row>
      <el-row style="text-align: center; margin-top: 10px">
        <span>
          <el-button type="primary">保存</el-button>
          <el-button type="warning">打印</el-button>
        </span>
      </el-row>
    </el-main>
    <el-aside v-model="ReportStatistics" style="width: 300px">
      <div style="margin-left:100px; margin-top: 20px">
        <p>报告统计：</p>
        <p>已处理：{{ ReportStatistics.Processed }}份</p>
        <p>未处理：{{ ReportStatistics.Unprocessed }}份</p>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import echart from 'echarts'
export default {
  name: 'CheckReport',
  data() {
    return {
      ReportInfos: {
        Reporter: '111',
        Time: '111'
      },
      BasicInfos: {
        Idcard: '111',
        Name: '111',
        Birthday: '111',
        Age: '111',
        Sex: '111',
        Nation: '111',
        Tel: '111',
        Contact: '111',
        ContactTel: '111',
        PermanentAddress: '111',
        Address: '111',
        BloodType: '111',
        RH: '111',
        MaritalStatus: '111',
        IllHistory: '111',
        Dad: '111',
        Mom: '111',
        BroSis: '111',
        Son: '111',
        GeneticHistory: '111',
        Allergen: '111'
      },
      DiagnosisInfos: {
        DiagnosisIll: '111',
        DiagnosisTime: '111',
        CourseOfDiseaseTime: '111'
      },
      HealthAssessment: {
        Summary: '111',
        Name: '111',
        Level: '111'
      },
      LatestTestIndex: {
        InspectionItems: '111',
        TimeOfDiagnosis: '111',
        NormalRangeValue: '111',
        AnalysisResults: '111',
        InspectionTime: '111'
      },
      BloodPressure: {
        Avg: '111'
      },
      BloodSuger: {
        Avg: '111',
        Max: '111',
        Min: '111'
      },
      Cholesterol: {
        Avg: '111',
        Max: '111',
        Min: '111'
      },
      HDInterventionStatus: {
        CourseOfTreatment: '111',
        BloodPressureControlTarget: '',
        Medicine: '111',
        FoodAdvice: '111',
        DoctorAdvice: '111'
      },
      HBPInterventionStatus: {
        CourseOfTreatment: '111',
        BloodPressureControlTarget: '',
        Medicine: '111',
        FoodAdvice: '111',
        DoctorAdvice: '111'
      },
      FollowUpReport: {
        Text: '111'
      },
      SurveyOfDetection: {
        Text: '111'
      },
      ReportStatistics: {
        Processed: '111',
        Unprocessed: '111'
      },
      MedicalAdvice: {}
    }
  },
  mounted() {
    this.initCardiovascularDiseaseTenYearRiskChart()
  },
  methods: {
    initCardiovascularDiseaseTenYearRiskChart: function() {
      var cdtyrc = echart.init(this.$refs.CardiovascularDiseaseTenYearRiskChart)
      cdtyrc.setOption({
        title: {},
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['未干预', '干预', '同龄人最低风险']
        },
        xAxis: {
          type: 'category',
          data: ['五年', '十年', '终生']
        },
        yAxis: {
          name: '风险指数'
        },
        series: [
          {
            name: '未干预',
            type: 'line',
            smooth: 0.5,
            data: [6, 10, 12]
          },
          {
            name: '干预',
            type: 'line',
            smooth: 0.5,
            data: [4, 6, 10]
          },
          {
            name: '同龄人最低风险',
            type: 'line',
            smooth: 0.5,
            data: [2, 5, 8]
          }
        ]
      })
    }
  }
}
</script>
