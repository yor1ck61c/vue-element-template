<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="2" style="margin-top: 3px;">
          <el-button size="primary" @click="back()">返回</el-button>
        </el-col>
        <el-col :span="17">
          <el-tabs v-model="activeCard">
            <el-tab-pane label="基本信息" name="BasicInfo">
              <el-container>
                <el-row>
                  <el-col>
                    <el-card style="width: 800px; margin-left: 100px; margin-top: 50px">
                      <div slot="header" style="text-align:center">
                        <span style="font-size: 20px; color: #909399; font-family: Hiragino Sans GB">个人基本信息表</span>
                      </div>
                      <div>
                        <table border="1px" cellspacing="0px" style="border-collapse: collapse; text-align: center; border: 1px solid #DCDFE6; line-height: 1.7; font-size: 14px; color: #909399">
                          <tr>
                            <td width="230px">联系电话</td>
                            <td width="70%">{{ BasicInfoTable.PhoneNum }}</td>
                          </tr>
                          <tr>
                            <td>紧急联系人</td>
                            <td>{{ BasicInfoTable.EmergencyContact }}</td>
                          </tr>
                          <tr>
                            <td>紧急电话</td>
                            <td>{{ BasicInfoTable.EmergencyPhoneNumber }}</td>
                          </tr>
                          <tr>
                            <td>现住址</td>
                            <td>{{ BasicInfoTable.CurrentAddress }}</td>
                          </tr>
                          <tr>
                            <td>血型</td>
                            <td>{{ BasicInfoTable.BloodType }}</td>
                          </tr>
                          <tr>
                            <td>婚姻状况</td>
                            <td>{{ BasicInfoTable.IsMarried }}</td>
                          </tr>
                          <tr>
                            <td>疾病史</td>
                            <td>{{ BasicInfoTable.DiseaseHistory }}</td>
                          </tr>
                          <tr>
                            <td>家族史</td>
                            <td>{{ BasicInfoTable.FamliyHistory }}</td>
                          </tr>
                          <tr>
                            <td>遗传病史</td>
                            <td>{{ BasicInfoTable.GeneticHistory }}</td>
                          </tr>
                          <tr>
                            <td>过敏史</td>
                            <td>{{ BasicInfoTable.AllergyHistory }}</td>
                          </tr>
                        </table>
                      </div>
                    </el-card>
                  </el-col>
                </el-row>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="签约记录" name="SignRecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-button style="float: right" type="primary">新增签约合同</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="SignRecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="SignTime" label="签约时间" align="center" width="150" />
                        <el-table-column prop="SignType" label="签约类型" align="center" width="150" />
                        <el-table-column prop="ServePackage" label="服务包" align="center" width="150" />
                        <el-table-column prop="ContractEndTime" label="合同结束时间" align="center" width="150" />
                        <el-table-column prop="ContractStatus" label="合同状态" align="center" width="150" />
                        <el-table-column label="操作" align="center" width="200">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="病例记录" name="CaseRecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-col>
                      <el-table :data="DiseaseRecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="SeeDoctorTime" label="就诊时间" align="center" width="100" />
                        <el-table-column prop="DiseaseType" label="病例类型" align="center" width="100" />
                        <el-table-column prop="ServePattern" label="就诊服务模式" align="center" width="120" />
                        <el-table-column prop="ServeType" label="就诊服务类型" align="center" width="120" />
                        <el-table-column prop="FirstDiagSign" label="首诊标记" align="center" width="100" />
                        <el-table-column prop="DiagnosedInfo" label="诊断信息" align="center" width="100" />
                        <el-table-column prop="DiagnosedHospital" label="诊断医院" align="center" width="100" />
                        <el-table-column prop="DiagnosedDepartment" label="诊断科室" align="center" width="100" />
                        <el-table-column prop="DiagnosedDoctor" label="诊断医生" align="center" width="100" />
                        <el-table-column label="操作" align="center" width="50">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="确诊记录" name="DiagnosisRecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-button style="float: right;" type="primary">新增病例</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="DiagnosisRecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="DiseaseName" label="疾病名称" align="center" width="150" />
                        <el-table-column prop="DiagnosedTime" label="确诊时间" align="center" width="150" />
                        <el-table-column prop="CourseOfDisease" label="病程（月）" align="center" width="100" />
                        <el-table-column prop="RespDoctor" label="责任医生" align="center" width="150" />
                        <el-table-column prop="RespDepartment" label="责任科室" align="center" width="150" />
                        <el-table-column prop="RespHospital" label="责任医院" align="center" width="150" />
                        <el-table-column label="操作" align="center" width="150">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="风险评估" name="RiskAssess">
              <el-card>
                <div slot="header" style="text-align: center">
                  <span style="color: #909399">风险评估</span>
                </div>
                <el-container>
                  <el-main>
                    <el-row>
                      <el-button size="medium" type="warning" disabled>正常高值</el-button>
                    </el-row>
                    <el-row style="margin-top: 20px;">
                      <el-col>
                        <div>
                          <div>性别：男</div>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px;">
                      <el-col :span="7">
                        <div style="width: 100%; margin: 5px; height: 280px;">
                          <el-image :src="require('@/img/BloodPressure.png')" />
                        </div>
                      </el-col>
                      <el-col :span="7">
                        <div ref="RiskDistribute" style="width: 300px; margin: 5px; height: 230px;" />
                      </el-col>
                      <el-col :span="8">
                        <div ref="HeartDiseaseRisk" style="width: 300px; margin: 5px; height: 230px;" />
                      </el-col>
                    </el-row>
                  </el-main>
                </el-container>
              </el-card>
            </el-tab-pane>
            <el-tab-pane label="健康看板" name="HealthInfo">
              <el-container>
                <el-main>
                  <el-row>
                    <el-col style="color: #909399">
                      选择时间:
                      <el-date-picker
                        v-model="SelectHealthInfo.StartTime"
                        type="date"
                        placeholder="开始日期"
                      />
                      <el-date-picker
                        v-model="SelectHealthInfo.EndTime"
                        type="date"
                        placeholder="结束日期"
                        style="margin-left: 5px;"
                      />
                      <span style="float: right; margin-top: 15px;">
                        <el-radio-group v-model="SelectHealthInfo.Type">
                          <el-radio :label="1">日</el-radio>
                          <el-radio :label="2">周</el-radio>
                          <el-radio :label="3">月</el-radio>
                          <el-radio :label="4">年</el-radio>
                        </el-radio-group>
                      </span>
                    </el-col>
                  </el-row>
                  <el-row style="margin-top: 20px;">
                    <el-card>
                      <div slot="header" style="text-align: center">
                        <span style="color: #909399">血压</span>
                      </div>
                      <el-container>
                        <el-row>
                          <el-col :span="12">
                            <div style="width:400px; height: 230px; border: 1px solid #DCDFE6; margin-left: 50px;"><!----></div>
                          </el-col>
                          <el-col :span="12">
                            <div style="margin-left: 50px;;width:400px; height: 230px;border: 1px solid #DCDFE6"><!----></div>
                          </el-col>
                        </el-row>
                      </el-container>
                      <div style="margin-top: 20px">
                        <el-table :data="BloodPressureCountTable" border style="font-size:12px">
                          <el-table-column prop="Date" label="日期" align="center" />
                          <el-table-column prop="GetUp" label="早起后" align="center" />
                          <el-table-column prop="Morning" label="上午" align="center" />
                          <el-table-column prop="Afternoon" label="下午" align="center" />
                          <el-table-column prop="Night" label="晚上" align="center" />
                          <el-table-column prop="AveragePressure" label="平均压" align="center" />
                          <el-table-column prop="PulseRate" label="脉率" align="center" />
                          <el-table-column label="操作" align="center">
                            详情
                          </el-table-column>
                        </el-table>
                      </div>
                    </el-card>
                  </el-row>
                  <el-row style="margin-top: 20px">
                    <el-card>
                      <div slot="header" style="text-align: center">
                        <span style="color: #909399">糖尿病</span>
                      </div>
                      <el-container>
                        <el-row>
                          <el-col :span="12">
                            <div ref="BeforeMeetBloodSugarCharts" style="width:400px; height: 230px;" />
                          </el-col>
                          <el-col :span="12">
                            <div ref="AfterMeetBloodSugarCharts" style="margin-left: 50px;;width:400px; height: 230px;" />
                          </el-col>
                        </el-row>
                      </el-container>
                      <div style="margin-top: 20px;">
                        <el-table :data="BloodSugarCountTable" border style="font-size:12px">
                          <el-table-column prop="BeforeDawn" label="凌晨" align="center" />
                          <el-table-column prop="BeforeBreakfast" label="早餐前" align="center" />
                          <el-table-column prop="AfterBreakfast" label="早餐后" align="center" />
                          <el-table-column prop="BeforeLunch" label="午餐前" align="center" />
                          <el-table-column prop="AfterLunch" label="午餐后" align="center" />
                          <el-table-column prop="BeforeDinner" label="晚餐前" align="center" />
                          <el-table-column prop="AfterDinner" label="晚餐后" align="center" />
                          <el-table-column prop="BeforeSleep" label="睡前" align="center" />
                          <el-table-column prop="Random" label="随机" align="center" />
                          <el-table-column label="操作" align="center">
                            详情
                          </el-table-column>
                        </el-table>
                      </div>
                    </el-card>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="体检记录" name="PERecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-button style="float: right;" type="primary">添加体检报告</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="PERecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="PETime" label="体检日期" align="center" width="200" />
                        <el-table-column prop="HealthEvaluate" label="健康评价" align="center" width="200" />
                        <el-table-column prop="MainProblem" label="主要健康问题" align="center" width="200" />
                        <el-table-column prop="Medication" label="用药情况" align="center" width="200" />
                        <el-table-column label="操作" align="center" width="200">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="干预计划" name="IntervenePlan">
              <el-container>
                <el-main>
                  <el-row>
                    <el-button type="primary" size="medium" style="float: right;margin-right: 75px;">新增治疗计划</el-button>
                  </el-row>
                  <el-row>
                    <el-col :span="4" style="margin-top: 20px;margin-left: 30px;">
                      <el-select v-model="DiagnosedDisease" placeholder="确诊疾病">
                        <el-option value="heartDisease">心脏疾病</el-option>
                      </el-select>
                      <el-card style="margin-top: 20px;">
                        <div slot="header" style="text-align: center">
                          <span style="font-size: 14px; color: #909399">干预计划</span>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :span="18">
                      <el-container>
                        <el-main>
                          <el-row>
                            <el-col>
                              <el-card>
                                <div slot="header">
                                  <span style="margin-left: 300px; color: #909399">确诊信息</span>
                                  <span style="float: right; font-size: 12px; color: #909399">展开完整确诊信息</span>
                                </div>
                                <table border="1px" cellspacing="0px" style="width: 100%; border-collapse: collapse; text-align: center; line-height:1.7; font-size:14px; border: 1px solid #DCDFE6; color: #909399">
                                  <tr>
                                    <td>确诊疾病</td>
                                    <td>心脏病</td>
                                    <td>确诊日期</td>
                                    <td>11点12分</td>
                                  </tr>
                                </table>
                              </el-card>
                            </el-col>
                          </el-row>
                          <el-row style="margin-top: 20px;">
                            <el-card>
                              <el-tabs v-model="IPActiveCard">
                                <el-tab-pane label="计划详情" name="PlanDetail" style="color: #909399">
                                  <div style="font-size: 13px">
                                    计划时间：
                                  </div>
                                  <div>
                                    <p>用药方案</p>
                                    <el-table :data="DrugPlan" border>
                                      <el-table-column prop="Prescription" label="处方" align="center" />
                                      <el-table-column prop="PrescriptionTime" label="处方时间" align="center" />
                                      <el-table-column prop="DrugName" label="药物名称" align="center" />
                                      <el-table-column prop="MedicationCycle" label="用药周期" align="center" />
                                      <el-table-column prop="DrugUse" label="药物使用次剂量" align="center" />
                                    </el-table>
                                  </div>
                                  <div>
                                    <p>运动方案</p>
                                    <div>次/周 分钟/次</div>
                                    <el-input
                                      v-model="MovementPlan"
                                      type="textarea"
                                      :rows="2"
                                      placeholder="请输入运动方案"
                                    />
                                  </div>
                                  <div>
                                    <p>膳食建议</p>
                                    <el-input
                                      v-model="FoodAdvise"
                                      type="textarea"
                                      :rows="2"
                                      placeholder="请输入膳食建议"
                                    />
                                  </div>
                                  <div>
                                    <p>个人危急值</p>
                                    <el-table :data="IndividualDangerousValue" border>
                                      <el-table-column prop="ExamTarget" label="监测指标" align="center" />
                                      <el-table-column prop="Target" label="目标" align="center" />
                                      <el-table-column prop="ExamOrder" label="检测要求" align="center" />
                                    </el-table>
                                  </div>
                                  <div>
                                    <p>随访方案</p>
                                    <el-table :data="FollowUpPlan" border>
                                      <el-table-column prop="NextFollowUpTime" label="下次随访日期" align="center" />
                                      <el-table-column prop="ExamItem" label="检测项目" align="center" />
                                      <el-table-column prop="FollowUpWay" label="随访方式" align="center" />
                                      <el-table-column prop="FollowUpDoctor" label="随访医生" align="center" />
                                    </el-table>
                                  </div>
                                </el-tab-pane>
                                <el-tab-pane label="执行情况" name="OperateStatus">1</el-tab-pane>
                              </el-tabs>
                            </el-card>
                          </el-row>
                        </el-main>
                      </el-container>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="随访记录" name="FollowUpRecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-select v-model="DiseaseName" placeholder="请选择疾病名称">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                    <el-button style="float: right;" type="primary">添加随访</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="FollowUpRecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="FollowUpTime" label="随访时间" align="center" width="100" />
                        <el-table-column prop="DiseaseName" label="疾病名称" align="center" width="100" />
                        <el-table-column prop="FollowUpType" label="随访类型" align="center" width="100" />
                        <el-table-column prop="FollowUpWay" label="随访方式" align="center" width="100" />
                        <el-table-column prop="FollowUpEvaluate" label="随访评价" align="center" width="100" />
                        <el-table-column prop="PsychoEvaluate" label="心理评价" align="center" width="100" />
                        <el-table-column prop="DrugCompliance" label="服药依从性" align="center" width="100" />
                        <el-table-column prop="DrugReact" label="药物反应" align="center" width="100" />
                        <el-table-column prop="ComplianceBehavior" label="遵医行为" align="center" width="100" />
                        <el-table-column prop="NextFollowUpTime" label="下次随访时间" align="center" width="120" />
                        <el-table-column prop="FollowUpDoctor" label="随访医生" align="center" width="100" />
                        <el-table-column prop="FollowUpDepartment" label="随访科室" align="center" width="100" />
                        <el-table-column label="操作" align="center" width="100">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="预警记录" name="AlertRecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-col>
                      <el-table :data="AlertRecord" border style="margin-top: 20px; font-size: 12px">
                        <el-table-column prop="AlertTime" label="预警时间" align="center" width="150" />
                        <el-table-column prop="AlertType" label="预警类型" align="center" width="150" />
                        <el-table-column prop="ExamTarget" label="检测指标" align="center" width="100" />
                        <el-table-column prop="ExamValue" label="检测值" align="center" width="100" />
                        <el-table-column prop="AnalyseRes" label="分析结果" align="center" width="150" />
                        <el-table-column prop="HandleOptions" label="处理意见" align="center" width="100" />
                        <el-table-column prop="HandleDoctor" label="处理医生" align="center" width="150" />
                        <el-table-column label="操作" align="center" width="100">
                          详情
                        </el-table-column>
                      </el-table>
                    </el-col>
                  </el-row>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="设备管理" name="DeviceManage">
              <el-container>
                <el-row>
                  <el-col>
                    <el-table :data="DeviceManageInfos" border style="margin-left: 50px;margin-top: 20px; font-size: 12px">
                      <el-table-column prop="ContractNum" label="合同编号" align="center" width="150" />
                      <el-table-column prop="ReceiveTime" label="领用时间" align="center" width="150" />
                      <el-table-column prop="DeviceName" label="设备名称" align="center" width="150" />
                      <el-table-column prop="DeviceNum" label="设备编号" align="center" width="150" />
                      <el-table-column prop="BorrowStatus" label="借用状态" align="center" width="150" />
                      <el-table-column prop="Operator" label="经办人" align="center" width="150" />
                    </el-table>
                  </el-col>
                </el-row>
              </el-container>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="4" style="margin-left: 25px;margin-top: 35px;">
          <div style="height: 500px; width: 250px; border: solid #bfbfff 5px">
            <resident-info-card />
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import ResidentInfoCard from '@/components/ResidentInfoCard.vue'
import echarts from 'echarts'
export default {
  name: 'RecordDetails',
  components: {
    ResidentInfoCard
  },
  data() {
    return {
      activeCard: 'BasicInfo',
      IPActiveCard: 'PlanDetail',
      BasicInfoTable: {},
      SignRecord: [],
      DiseaseRecord: [],
      DiagnosisRecord: [],
      PERecord: [],
      AlertRecord: [],
      FollowUpRecord: [],
      DiseaseName: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      DeviceManageInfos: [],
      DrugPlan: [],
      MovementPlan: '',
      FoodAdvise: '',
      IndividualDangerousValue: [],
      FollowUpPlan: [],
      SelectHealthInfo: { Type: 1 },
      DiagnosedDisease: '',
      BloodPressureCountTable: [],
      BloodSugarCountTable: []
    }
  },
  mounted() {
    this.initRiskDistributeChart()
    this.initHeartDiseaseRiskChart()
    this.initBeforeMeetBloodSugarCharts()
    this.initAfterMeetBloodSugarCharts()
  },
  methods: {
    initRiskDistributeChart: function() {
      var rdc = echarts.init(this.$refs.RiskDistribute)
      rdc.setOption({
        title: {},
        tooltip: {},
        legend: {
          data: ['极高', '高危', '中危', '低危']
        },
        calculable: true,
        series: [
          {
            name: 'RiskDistribute',
            type: 'funnel',
            width: '50%',
            sort: 'ascending',
            data: [
              { value: 25, name: '极高' },
              { value: 50, name: '高危' },
              { value: 75, name: '中危' },
              { value: 100, name: '低危' }
            ]
          }
        ]
      })
    },
    initHeartDiseaseRiskChart: function() {
      var hdrc = echarts.init(this.$refs.HeartDiseaseRisk)
      hdrc.setOption({
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
    },
    initBeforeMeetBloodSugarCharts: function() {
      var bmbsc = echarts.init(this.$refs.BeforeMeetBloodSugarCharts)
      bmbsc.setOption({
        title: {
          text: '空腹血糖(mmol/L)'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'right',
          data: ['血糖值']
        },
        xAxis: {
          name: '日期',
          data: ['1.18', '1.19']
        },
        yAxis: {
          name: '血糖值'
        },
        series: {
          name: '血糖值',
          type: 'line',
          data: [2.3, 5],
          smooth: 0
        }
      })
    },
    initAfterMeetBloodSugarCharts: function() {
      var ambsc = echarts.init(this.$refs.AfterMeetBloodSugarCharts)
      ambsc.setOption({
        title: {
          text: '餐后2H血糖(mmol/L)'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'right',
          data: ['血糖值']
        },
        xAxis: {
          name: '日期',
          data: ['1.18', '1.19']
        },
        yAxis: {
          name: '血糖值'
        },
        series: {
          name: '血糖值',
          type: 'line',
          data: [8, 9],
          smooth: 0
        }
      })
    },
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
