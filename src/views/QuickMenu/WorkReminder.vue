<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-tabs v-model="WorkReminderTabs">
            <el-tab-pane label="检测提醒" name="CheckRemind">
              <div>
                <el-form :inline="true" :model="DetectionReminderSearchInfos">
                  <el-form-item>
                    <el-select
                      v-model="DetectionReminderSearchInfos.TestIndex"
                      placeholder="检测指标"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      v-model="DetectionReminderSearchInfos.Name"
                      placeholder="姓名"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-select
                      v-model="DetectionReminderSearchInfos.Signed"
                      placeholder="是否签约"
                    >
                      <el-option label="已签约" value="已签约" />
                      <el-option label="未签约" value="未签约" />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select
                      v-model="DetectionReminderSearchInfos.TestTime"
                      filterable
                      placeholder="未检测提醒时间"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" icon="el-iconisearch">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <el-table :data="DetectionReminderTable" border>
                  <el-table-column prop="Edit" label="操作" align="center">
                    <el-button size="mini">一键提醒</el-button>
                  </el-table-column>
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="Sex" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="Tel" label="联系电话" align="center" />
                  <el-table-column prop="TestIndex" label="检测指标" align="center" />
                  <el-table-column prop="TeatValue" label="检测值" align="center" />
                  <el-table-column prop="AnalysisResults" label="分析结果" align="center" />
                  <el-table-column prop="Signed" label="是否签约" align="center" />
                  <el-table-column prop="LastTestTime" label="上次检测时间" align="center" />
                  <el-table-column prop="FilingOrganization" label="建档机构" align="center" />
                  <el-table-column prop="PermanentAddress" label="户籍地址" align="center" />
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="随访提醒" name="FollowUpReminder">
              <div>
                <el-form :inline="true" :model="FollowUpReminderSearchInfos">
                  <el-form-item>
                    <el-radio-group v-model="FollowUpReminderSearchInfos.FollowUp">
                      <span>待随访患者： </span>
                      <el-radio :label="3">本周</el-radio>
                      <el-radio :label="6">下周</el-radio>
                      <el-radio :label="9">本月</el-radio>
                      <el-radio :label="12">下月</el-radio>
                      <el-radio :label="15">全部</el-radio>
                    </el-radio-group>
                    <el-button type="primary" style="margin-left: 20px;">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <el-table :data="FollowUpReminderTable" border>
                  <el-table-column prop="FollowUpEdit" label="操作" align="center">
                    <el-button size="mini">删除</el-button>
                    <el-button size="mini">随访</el-button>
                  </el-table-column>
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="Sex" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="Tel" label="联系电话" align="center" />
                  <el-table-column prop="FollowUpIll" label="随访疾病" align="center" />
                  <el-table-column prop="NextFollowUpTime" label="下次随访时间" align="center" />
                  <el-table-column prop="FilingOrganization" label="建档机构" align="center" />
                  <el-table-column prop="CurrentAddress" label="现住址" align="center" />
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="签约提醒" name="third">
              <div>
                <el-form :inline="true" :model="SigningReminderSearchInfos">
                  <el-form-item>
                    <el-select v-model="SigningReminderSearchInfos.SelectName" placeholder="姓名">
                      <el-option label="姓名" value="姓名" />
                      <el-option label="姓名" value="姓名" />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-input v-model="SigningReminderSearchInfos.Name" placeholder="姓名" style="width: 150px;" />
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="SigningReminderSearchInfos.Signing" placeholder="签约">
                      <el-option label="签约" value="签约" />
                      <el-option label="签约" value="签约" />
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary">搜索</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div>
                <el-table :data="SigningReminderTable" border>
                  <el-table-column label="操作" align="center">
                    <el-button size="mini" type="primary">设备解绑</el-button>
                    <el-button size="mini" type="primary">解约</el-button>
                    <el-button size="mini" type="primary">详情</el-button>
                  </el-table-column>
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="PhoneNum" label="手机号码" align="center" />
                  <el-table-column prop="ContractType" label="合同类型" align="center" />
                  <el-table-column prop="ContractState" label="合同状态" align="center" />
                  <el-table-column prop="ContractTerm" label="合同到期" align="center" />
                  <el-table-column prop="Payment" label="缴费情况" align="center" />
                  <el-table-column prop="ServicePackage" label="服务包" align="center" />
                  <el-table-column prop="ContractNum" label="合同编号" align="center" />
                  <el-table-column prop="SigningTime" label="签约时间" align="center" />
                  <el-table-column prop="ContractDeadline" label="合同截至时间" align="center" />
                  <el-table-column prop="ContractCycle" label="合同周期" align="center" />
                  <el-table-column prop="FilingOrganization" label="建档机构" align="center" />
                  <el-table-column prop="PermanentAddress" label="户籍地址" align="center" />
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'WorkReminder',
  data() {
    return {
      WorkReminderTabs: 'CheckRemind',
      WorkReminderInfos: [],
      DetectionReminderSearchInfos: {
        TestIndex: '',
        Name: '',
        Signed: ''
      },
      DetectionReminderTable: [],
      FollowUpReminderSearchInfos: {
        FollowUp: ''
      },
      FollowUpReminderTable: [],
      SigningReminderSearchInfos: {
        SelectName: '',
        Name: '',
        Signing: ''
      },
      SigningReminderTable: [],
      options: [{
        value: '选项1',
        label: '指标1'
      }, {
        value: '选项2',
        label: '指标2'
      }, {
        value: '选项3',
        label: '指标3'
      }, {
        value: '选项4',
        label: '指标4'
      }, {
        value: '选项5',
        label: '指标5'
      }],
      value: ''
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
