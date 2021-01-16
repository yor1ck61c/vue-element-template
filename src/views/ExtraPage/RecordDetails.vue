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
                    <el-card style="width: 800px;margin-left: 100px;">
                      <div slot="header" style="text-align:center">
                        <span>个人基本信息表</span>
                      </div>
                      <table border="1" style="text-align:center">
                        <tr>
                          <td width="230px">联系电话</td>
                          <td width="70%">value</td>
                        </tr>
                        <tr>
                          <td>紧急联系人</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>紧急电话</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>现住址</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>血型</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>婚姻状况</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>疾病史</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>家族史</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>遗传病史</td>
                          <td>value</td>
                        </tr>
                        <tr>
                          <td>过敏史</td>
                          <td>value</td>
                        </tr>
                      </table>
                    </el-card>
                  </el-col>
                </el-row>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label="签约记录" name="SignRecord">
              test
            </el-tab-pane>
            <el-tab-pane label="病例记录" name="CaseRecord">
              <resident-info-card />
            </el-tab-pane>
            <el-tab-pane label="确诊记录" name="DiagnosisRecord">选项卡1内容</el-tab-pane>
            <el-tab-pane label="风险评估" name="RiskAssess">选项卡2内容</el-tab-pane>
            <el-tab-pane label="健康看板" name="HealthInfo">选项卡3内容</el-tab-pane>
            <el-tab-pane label="体检记录" name="PERecord">选项卡1内容</el-tab-pane>
            <el-tab-pane label="干预计划" name="IntervenePlan">选项卡2内容</el-tab-pane>
            <el-tab-pane label="随访记录" name="FollowUpRecord">选项卡3内容</el-tab-pane>
            <el-tab-pane label="预警记录" name="AlertRecord">选项卡1内容</el-tab-pane>
            <el-tab-pane label="设备管理" name="DeviceManage">
              <el-container>
                <el-row>
                  <el-col>
                    <el-table :data="DeviceManageInfos" border>
                      <el-table-column prop="ContractNum" label="合同编号" align="center" />
                      <el-table-column prop="ReceiveTime" label="领用时间" align="center" />
                      <el-table-column prop="DeviceName" label="设备名称" align="center" />
                      <el-table-column prop="DeviceNum" label="设备编号" align="center" />
                      <el-table-column prop="BorrowStatus" label="借用状态" align="center" />
                      <el-table-column prop="Operator" label="经办人" align="center" />
                    </el-table>
                  </el-col>
                </el-row>
              </el-container>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="4" style="margin-left: 25px;margin-top: 35px;">
          <div style="height: 500px; width: 250px; border: solid 1px">
            1
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
      activeCard: 'card3',
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
