<template>
  <el-container>
    <el-header style="margin-top: 20px;">
      <el-row>
        <el-col :span="6" style="text-align: center; color: #909399">
          <div>档案检测：{{ ExamPeopleSum }}人</div>
        </el-col>
        <el-col :span="4" style="margin-left: 200px; color: #909399">
          <div>今日检测：血糖{{ BloodSugar }}人</div>
        </el-col>
        <el-col :span="2" style="color: #909399">
          <div>血压{{ BloodPressure }}人</div>
        </el-col>
        <el-col :span="2" style="color: #909399">
          <div>心电图{{ Electrocardiogram }}人</div>
        </el-col>
      </el-row>
      <el-divider />
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8" style="border: #6cadc8 solid 1px">
          <el-card>
            <div slot="header" style="text-align: center; color: #909399">疾病分布</div>
            <div ref="DiseaseDistribute" style="width: 100%; height: 280px; margin: 5px;" />
          </el-card>
          <el-card>
            <div slot="header" style="text-align: center; color: #909399">年龄分布</div>
            <div ref="AgeDistribute" style="width: 100%; height: 280px; margin: 5px;" />
          </el-card>
          <el-card>
            <div slot="header" style="text-align:center; color: #909399">性别分布</div>
            <div ref="GenderDistribute" style="width: 100%; height: 280px; margin: 5px;" />
          </el-card>
        </el-col>
        <el-col :span="15" style="border: #6cadc8 solid 1px; margin-left: 10px;">
          <div style="margin: 5px; width: 100%">
            <span style="margin-left: 5px; color: #909399"><i class="el-icon-user-solid" /> 七天内实测数据</span>
            <a href="#" style="float: right; margin-right: 20px; font-size: 14px; color: #909399">更多</a>
          </div>
          <el-table :data="RealTimeMonitorData" border style="margin-top: 10px; font-size: 12px">
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="Gender" label="性别" align="center" />
            <el-table-column prop="Age" label="年龄" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
            <el-table-column prop="PhoneNum" label="联系电话" align="center" />
            <el-table-column prop="ExamItem" label="检测指标" align="center" />
            <el-table-column prop="ExamValue" label="检测值" align="center" />
            <el-table-column prop="AnalyzeRes" label="分析结果" align="center" />
            <el-table-column prop="ExamTime" label="检测时间" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
    <el-dialog title="快捷服务导航" :visible.sync="QuickServeNav">
      <el-container>
        <el-main>
          <el-row>
            <el-col>
              <div>身份证信息</div>
              <el-divider />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-image style="width: 100px; height: 100px;" :src="url" />
            </el-col>
            <el-col :span="14" style="font-size: 13px">
              <div>
                <span style="display: inline-block; width: 180px;">证件类型:身份证</span>
                <span>证件号码:{{ UnSignQuickServeNavInfo.ID }}</span>
                <el-divider />
              </div>
              <div>
                <span style="display: inline-block; width: 180px;">姓名:{{ UnSignQuickServeNavInfo.Name }}</span>
                <span>性别：{{ UnSignQuickServeNavInfo.Gender }}</span>
                <el-divider />
              </div>
              <div>
                <span style="display: inline-block; width: 180px;">年龄: {{ UnSignQuickServeNavInfo.Age }}</span>
                <span>住址: {{ UnSignQuickServeNavInfo.Address }}</span>
                <el-divider />
              </div>
            </el-col>
          </el-row>
          <el-divider />
          <el-row style="line-height:1.7">
            <div style="text-align: center">档案状态：未建档</div>
            <div style="margin-top: 20px;">请点击相应按钮进入该项服务：</div>
            <div>档案管理</div>
            <el-divider />
            <el-button type="primary" size="medium">居民建档</el-button>
            <el-divider />
          </el-row>
        </el-main>
      </el-container>
    </el-dialog>
  </el-container>
</template>

<script>
import echarts from 'echarts'
import Axios from 'axios'
export default {
  name: 'HomePage',
  data() {
    return {
      ExamPeopleSum: '6',
      BloodSugar: '1',
      BloodPressure: '2',
      Electrocardiogram: '3',
      RealTimeMonitorData: [],
      QuickServeNav: true,
      url: 'test',
      UnSignQuickServeNavInfo: {
        ID: '',
        Name: '',
        Gender: '',
        Age: '',
        Address: ''
      }
    }
  },
  mounted() {
    this.QueryChartsData()
  },
  methods: {
    QueryChartsData: function() {
      Axios.post('https://www.fastmock.site/mock/16fddfe65af12b42183595cffa0358a8/getDeviceData/getDiseaseDistributeData')
        .then((res) => {
          this.InitDiseaseDistributeCharts(res.data.HeartDiseaseNum, res.data.DiabetesNum, res.data.HighBloodPressureNum)
          this.InitAgeDistributeCharts(
            res.data.LessThanThirty,
            res.data.ThirtyToSixty,
            res.data.SixtyToEighty,
            res.data.OverEighty,
            res.data.UnknownAge
          )
          this.InitGenderDistributeCharts(res.data.MaleNum, res.data.FemaleNum, res.data.UnknownGenderNum)
        })
    },
    InitDiseaseDistributeCharts: function(HeartDiseaseNum, DiabetesNum, HighBloodPressureNum) {
      var ddc = echarts.init(this.$refs.DiseaseDistribute)
      ddc.setOption({
        title: {},
        tooltip: {},
        legend: {
          show: true,
          data: ['人数']
        },
        xAxis: {
          data: ['心脏疾病', '糖尿病', '高血压']
        },
        yAxis: {},
        series: [
          {
            name: ['人数'],
            type: 'bar',
            barWidth: 30,
            data: [
              { value: HeartDiseaseNum, name: '心脏疾病' },
              { value: DiabetesNum, name: '糖尿病' },
              { value: HighBloodPressureNum, name: '高血压' }
            ],
            itemStyle: { // 上方显示数值
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: { // 数值样式
                    color: 'black',
                    fontSize: 13
                  }
                }
              }
            }
          }
        ]
      })
    },
    InitAgeDistributeCharts: function(LessThanThirty, ThirtyToSixty, SixtyToEighty, OverEighty, UnknownAge) {
      var adc = echarts.init(this.$refs.AgeDistribute)
      adc.setOption({
        legend: {
          top: 0,
          data: ['30岁以下', '30至60岁', '60至80岁', '80岁以上', '未知']
        },
        series: [{
          name: '年龄',
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          data: [
            { value: LessThanThirty, name: '30岁以下' },
            { value: ThirtyToSixty, name: '30至60岁' },
            { value: SixtyToEighty, name: '60至80岁' },
            { value: OverEighty, name: '80岁以上' },
            { value: UnknownAge, name: '未知' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              label: {
                show: true,
                formatter: '{b} : {c} ({d}%)'
              },
              labelLine: { show: true }
            }
          }
        }]
      })
    },
    InitGenderDistributeCharts: function(MaleNum, FemaleNum, UnknownGenderNum) {
      var gdc = echarts.init(this.$refs.GenderDistribute)
      gdc.setOption({
        legend: {
          top: 0,
          data: ['男性', '女性', '未知']
        },
        series: [{
          name: '人数',
          type: 'pie',
          radius: '40%',
          center: ['50%', '50%'],
          data: [
            { value: MaleNum, name: '男性' },
            { value: FemaleNum, name: '女性' },
            { value: UnknownGenderNum, name: '未知' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              label: {
                show: true,
                formatter: '{b} : {c} ({d}%)'
              },
              labelLine: { show: true }
            }
          }
        }]
      })
    }
  }
}
</script>

