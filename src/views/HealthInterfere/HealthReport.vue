<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-tabs v-model="activeCard">
            <el-tab-pane label="待审报告" name="NeedCheckReport">
              <div>
                <el-input v-model="NeedCheckReportSearch.Name" placeholder="请输入姓名" style="width: 150px;" />
                <el-date-picker v-model="NeedCheckReportSearch.Month" placeholder="请选择月份" style="width: 150px; margin-left: 20px;" />
                <el-button type="warning" style="margin-left: 20px;">搜索</el-button>
                <el-button type="primary" style="margin-left: 20px;">全部</el-button>
                <el-button type="primary" style="margin-left: 20px;">上月</el-button>
                <el-button type="primary" style="margin-left: 20px;">批量审核报告</el-button>
              </div>
              <div>
                <el-table :data="NeedCheckHealthReportTable" border style="margin-top: 20px;">
                  <el-table-column label="操作" align="center">
                    <el-button size="mini" type="primary">审核报告</el-button>
                  </el-table-column>
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="Gender" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="PhoneNum" label="联系电话" align="center" />
                  <el-table-column prop="ReportCycle" label="报告周期" align="center" />
                  <el-table-column prop="BuildHospital" label="建档机构" align="center" />
                  <el-table-column prop="Address" label="户籍地址" align="center" />
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="已审报告" name="AlreadyCheckReport">
              <div>
                <el-input v-model="AlreadyCheckReportSearch.Name" placeholder="请输入姓名" style="width: 150px;" />
                <el-date-picker v-model="AlreadyCheckReportSearch.Month" placeholder="请选择月份" style="width: 150px; margin-left: 20px;" />
                <el-button type="warning" style="margin-left: 20px;">搜索</el-button>
                <el-button type="primary" style="margin-left: 20px;">全部</el-button>
                <el-button type="primary" style="margin-left: 20px;">上月</el-button>
              </div>
              <div>
                <el-table :data="AlreadyCheckHealthReportTable" border style="margin-top: 20px;">
                  <el-table-column prop="Name" label="姓名" align="center" />
                  <el-table-column prop="Gender" label="性别" align="center" />
                  <el-table-column prop="Age" label="年龄" align="center" />
                  <el-table-column prop="PhoneNum" label="联系电话" align="center" />
                  <el-table-column prop="ReportCycle" label="报告周期" align="center" />
                  <el-table-column prop="BuildHospital" label="建档机构" align="center" />
                  <el-table-column prop="Address" label="户籍地址" align="center" />
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
      activeCard: 'NeedCheckReport',
      NeedCheckReportSearch: {},
      NeedCheckHealthReportTable: [],
      AlreadyCheckReportSearch: {},
      AlreadyCheckHealthReportTable: []
    }
  }
}
</script>
