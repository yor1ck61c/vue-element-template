<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-card>
            <div slot="header" icon="el-icon-warning-outline">预警数据</div>
            <div>
              <el-table :data="AlertData" border style="margin-top: 10px; font-size: 12px">
                <el-table-column label="操作" width="150" align="center">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleInfos(scope.row.Name)">处理</el-button>
                    <el-button size="mini" disabled @click="checkInfos()">查看</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="Name" label="姓名" width="80" align="center" />
                <el-table-column prop="Gender" label="性别" width="50" align="center" />
                <el-table-column prop="Age" label="年龄" width="50" align="center" />
                <el-table-column prop="PhoneNum" label="联系电话" align="center" />
                <el-table-column prop="ExamItem" label="检测指标" align="center" />
                <el-table-column prop="AlertType" label="预警类型" align="center" />
                <el-table-column prop="ExamValue" label="检测值" align="center" />
                <el-table-column prop="AnalyzeRes" label="分析结果" align="center" />
                <el-table-column prop="AlertTime" label="预警时间" align="center" />
                <el-table-column prop="AlertTotalTime" label="预警时长" align="center" />
                <el-table-column prop="SignLocation" label="建档机构" width="120" align="center" />
                <el-table-column prop="Address" label="户籍地址" align="center" />
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MonitorAlert',
  data() {
    return {
      AlertData: []
    }
  },
  created() {
    this.InitAlertDataTable()
  },
  methods: {
    handleInfos: function(ResidentName) {
      this.$router.push({
        path: '/ManageAlert',
        name: 'ManageAlert',
        params: {
          Name: ResidentName
        }
      })
    },
    checkInfos: function() {},
    InitAlertDataTable: function() {
      axios.post('https://www.fastmock.site/mock/16fddfe65af12b42183595cffa0358a8/getDeviceData/getHandleAlert').then((res) => {
        this.AlertData = res.data.AlertData
      })
    }
  }
}
</script>
