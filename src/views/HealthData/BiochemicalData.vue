<template>
  <el-container>
    <el-header style="margin-top: 30px">
      <el-form :inline="true" :model="SearchInfo" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="SearchInfo.ResidentName" placeholder="姓名" />
        </el-form-item>
        <el-form-item>
          <el-select v-model="SearchInfo.ExamItem" placeholder="检测指标">
            <el-option label="血压" value="血压" />
            <el-option label="二级" value="二级" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.StartTime"
            type="date"
            placeholder="开始日期"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.EndTime"
            type="date"
            placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item>
          <el-input v-model="SearchInfo.SignLocation" placeholder="建档机构" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="BiochemicalDataTable" border>
            <el-table-column prop="ExamTime" label="检查时间" align="center" />
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="ID" label="身份证号" align="center" />
            <el-table-column prop="Gender" label="性别" align="center" />
            <el-table-column prop="Age" label="年龄" align="center" />
            <el-table-column prop="PhoneNum" label="联系电话" align="center" />
            <el-table-column prop="ExamItem" label="检测指标" align="center" />
            <el-table-column prop="ExamValue" label="检测值" align="center" />
            <el-table-column prop="AnalyzeRes" label="分析结果" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
            <el-table-column prop="Address" label="户籍地址" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
// import Axios from 'axios'
export default {
  name: 'BiochemicalData',
  data() {
    return {
      BiochemicalDataTable: [],
      SearchInfo: {
        ResidentName: '',
        ExamItem: '',
        StartTime: '',
        EndTime: '',
        SignLocation: ''
      }
    }
  },
  created() {
    /* var that = this
    Axios.post('testURL').then((res) => {
      that.BiochemicalDataTable = res.data.BiochemicalDataTable
    })*/
  },
  methods: {
    onSearch: function() {}
  }

}
</script>
