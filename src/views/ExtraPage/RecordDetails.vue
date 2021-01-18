<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="2" style="margin-top: 3px;">
          <el-button size="medium" @click="back()">返回</el-button>
        </el-col>
        <el-col :span="17">
          <el-tabs v-model="activeCard">
            <el-tab-pane label="基本信息" name="BasicInfo">
              <el-container>
                <el-row>
                  <el-col>
                    <el-card style="width: 800px;margin-left: 100px;margin-top: 50px;">
                      <div slot="header" style="text-align:center">
                        <span style="font-size:20px;font-family:Hiragino Sans GB">个人基本信息表</span>
                      </div>
                      <div class="BasicInfoTable">
                        <table border="1px" cellspacing="0px" style="border-collapse:collapse;text-align:center; line-height:1.7; font-size:14px">
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
                    <el-button style="float: right;" type="primary">新增签约合同</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="SignRecord" border style="margin-top: 20px;">
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
                      <el-table :data="DiseaseRecord" border style="margin-top: 20px;">
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
                      <el-table :data="DiagnosisRecord" border style="margin-top: 20px;">
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
            <el-tab-pane label="风险评估" name="RiskAssess">选项卡2内容</el-tab-pane>
            <el-tab-pane label="健康看板" name="HealthInfo">选项卡3内容</el-tab-pane>
            <el-tab-pane label="体检记录" name="PERecord">
              <el-container>
                <el-main>
                  <el-row>
                    <el-button style="float: right;" type="primary">添加体检报告</el-button>
                  </el-row>
                  <el-row>
                    <el-col>
                      <el-table :data="PERecord" border style="margin-top: 20px;">
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
            <el-tab-pane label="干预计划" name="IntervenePlan">选项卡2内容</el-tab-pane>
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
                      <el-table :data="FollowUpRecord" border style="margin-top: 20px;">
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
                      <el-table :data="AlertRecord" border style="margin-top: 20px;">
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
                    <el-table :data="DeviceManageInfos" border style="margin-left: 50px;margin-top: 20px;">
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
export default {
  name: 'RecordDetails',
  components: {
    ResidentInfoCard
  },
  data() {
    return {
      activeCard: 'BasicInfo',
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
      DeviceManageInfos: []
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
