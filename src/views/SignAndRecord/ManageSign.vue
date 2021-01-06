<template>
  <el-container>
    <el-header style="margin-top: 30px">
      <el-form :inline="true" :model="SearchInfo" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="SearchInfo.ResidentName" placeholder="姓名" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.StartTime"
            type="date"
            placeholder="开始日期"
            style="width:150px"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="SearchInfo.EndTime"
            type="date"
            placeholder="结束日期"
            style="width:150px"
          />
        </el-form-item>
        <el-form-item>
          <el-select v-model="SearchInfo.ContractStatus" placeholder="请选择合同状态" style="width:150px">
            <el-option label="血压" value="血压" />
            <el-option label="二级" value="二级" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="SearchInfo.SignStatus" placeholder="请选择签约状态" style="width:150px">
            <el-option label="血压" value="血压" />
            <el-option label="二级" value="二级" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">新增签约合同</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="ManageSignDataTable" border>
            <el-table-column label="操作" align="center">
              <el-button size="mini" @click="CancelManageSign()">解约</el-button>
              <el-button size="mini" @click="ManageSignDetail()">详情</el-button>
              <el-button size="mini" @click="deleteManageSign()">删除</el-button>
            </el-table-column>
            <el-table-column prop="SignTime" label="签约时间" align="center" />
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="PhoneNum" label="手机号码" align="center" />
            <el-table-column prop="ContractStatus" label="合同状态" align="center" />
            <el-table-column prop="IsExpire" label="合同到期" align="center" />
            <el-table-column prop="IsPaid" label="缴费情况" align="center" />
            <el-table-column prop="ServePackageInfo" label="服务包" align="center" />
            <el-table-column prop="ContractNum" label="合同编号" align="center" />
            <el-table-column prop="StartTime" label="合同开始时间" align="center" />
            <el-table-column prop="EndTime" label="合同结束时间" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
            <el-table-column prop="Address" label="户籍地址" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'ManageSign',
  data() {
    return {
      ManageSignDataTable: [],
      SearchInfo: {
        ResidentName: '',
        StartTime: '',
        EndTime: '',
        ContractStatus: '',
        SignStatus: ''
      }
    }
  },
  created() {
    var that = this
    Axios.post('testURL').then((res) => {
      that.ManageSignDataTable = res.data.ManageSignDataTable
    })
  },
  methods: {
    onSearch: function() {}
  }
}
</script>
