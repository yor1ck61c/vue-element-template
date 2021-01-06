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
          <el-input v-model="SearchInfo.DoctorName" placeholder="建档医生" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="SearchInfo.SignLocation" placeholder="建档机构" style="width:150px" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onResidentSign">居民建档</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="BasicRecordDataTable" border>
            <el-table-column label="操作" align="center">
              <el-button size="mini" @click="editBasicRecordInfos()">编辑</el-button>
              <el-button size="mini" @click="deleteBasicRecordInfos()">删除</el-button>
            </el-table-column>
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="ID" label="身份证号" align="center" />
            <el-table-column prop="Gender" label="性别" align="center" />
            <el-table-column prop="Age" label="年龄" align="center" />
            <el-table-column prop="PhoneNum" label="联系电话" align="center" />
            <el-table-column prop="DiseaseName" label="确诊疾病" align="center" />
            <el-table-column prop="SignPeople" label="建档人" align="center" />
            <el-table-column prop="SignTime" label="建档时间" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'BasicRecord',
  data() {
    return {
      BasicRecordDataTable: [],
      SearchInfo: {
        ResidentName: '',
        StartTime: '',
        EndTime: '',
        ContractStatus: '',
        DoctorName: '',
        SignLocation: ''
      }
    }
  },
  created() {
    var that = this
    Axios.post('testURL').then((res) => {
      that.BasicRecordDataTable = res.data.BasicRecordDataTable
    })
  },
  methods: {
    onSearch: function() {},
    onResidentSign: function() {}
  }

}
</script>
