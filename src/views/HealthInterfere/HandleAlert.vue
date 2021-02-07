<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-tabs v-model="activeCard">
            <el-tab-pane label="待处理预警" name="NeedHandleAlert">
              <div>
                <el-input v-model="NeedHandleAlertInfo.Name" placeholder="请输入姓名" style="width: 150px;" />
                <el-date-picker v-model="NeedHandleAlertInfo.StartTime" type="date" placeholder="开始时间" style="width: 150px; margin-left: 20px;" />
                <el-date-picker v-model="NeedHandleAlertInfo.EndTime" type="date" placeholder="结束时间" style="width: 150px; margin-left: 20px;" />
                <el-input v-model="NeedHandleAlertInfo.BuildHospital" placeholder="请输入建档机构" style="width: 200px; margin-left: 20px;" />
                <el-button type="warning" style="margin-left: 20px;">搜 索</el-button>
              </div>
              <div>
                <el-table :data="NeedHandleAlertTable" border style="margin-top: 20px; font-size: 12px">
                  <el-table-column label="操作" align="center">
                    <el-button size="mini" type="primary">处 理</el-button>
                  </el-table-column>
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="ID" label="身份证号" align="center" />
                  <el-table-column prop="Gender" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="PhoneNum" label="联系电话" align="center" />
                  <el-table-column prop="BuildHospital" label="建档机构" align="center" />
                  <el-table-column prop="Address" label="户籍地址" align="center" />
                  <el-table-column prop="ExamTarget" label="检测指标" align="center" />
                  <el-table-column prop="AlertType" label="预警类型" align="center" />
                  <el-table-column prop="ExamValue" label="检测值" align="center" />
                  <el-table-column prop="AnalyseRes" label="分析结果" align="center" />
                  <el-table-column prop="AlertTime" label="预警时间" align="center" />
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已处理预警" name="AlreadyHandleAlert">
              <div>
                <el-input v-model="AlreadyHandleAlertInfo.Name" placeholder="请输入姓名" style="width: 150px;" />
                <el-date-picker v-model="AlreadyHandleAlertInfo.StartTime" type="date" placeholder="开始时间" style="width: 150px; margin-left: 20px;" />
                <el-date-picker v-model="AlreadyHandleAlertInfo.EndTime" type="date" placeholder="结束时间" style="width: 150px; margin-left: 20px;" />
                <el-input v-model="AlreadyHandleAlertInfo.BuildHospital" placeholder="请输入建档机构" style="width: 200px; margin-left: 20px;" />
                <el-button type="warning" style="margin-left: 20px;">搜 索</el-button>
                <el-button type="primary" style="margin-left: 20px;">导出Excel表格</el-button>
              </div>
              <div>
                <el-table :data="AlreadyHandleAlertTable" border style="margin-top: 20px; font-size:12px">
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="ID" label="身份证号" align="center" />
                  <el-table-column prop="Gender" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="PhoneNum" label="联系电话" align="center" />
                  <el-table-column prop="BuildHospital" label="建档机构" align="center" />
                  <el-table-column prop="Address" label="户籍地址" align="center" />
                  <el-table-column prop="ExamTarget" label="检测指标" align="center" />
                  <el-table-column prop="AlertType" label="预警类型" align="center" />
                  <el-table-column prop="ExamValue" label="检测值" align="center" />
                  <el-table-column prop="AnalyseRes" label="分析结果" align="center" />
                  <el-table-column prop="AlertTime" label="预警时间" align="center" />
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
  name: 'HealthReport',
  data() {
    return {
      activeCard: 'NeedHandleAlert',
      NeedHandleAlertInfo: {},
      NeedHandleAlertTable: [],
      AlreadyHandleAlertInfo: {},
      AlreadyHandleAlertTable: []
    }
  }
}
</script>
