<template>
  <el-container border>
    <el-header style="margin-top:20px">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="SearchTeamName" placeholder="团队名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch()">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addDoctorTeamFormVisible = true">新增团队</el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        title="新增团队"
        :visible.sync="addDoctorTeamFormVisible"
      >
        <el-form :model="NewDoctorTeamInfo">
          <el-form-item label="团队名称" :label-width="formLabelWidth">
            <el-input
              v-model="NewDoctorTeamInfo.addName"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="团队编码" :label-width="formLabelWidth">
            <el-input
              v-model="NewDoctorTeamInfo.addNum"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="团队类型" :label-width="formLabelWidth">
            <el-select
              v-model="NewDoctorTeamInfo.addType"
              placeholder="请选择团队类型"
            >
              <el-option label="一级" value="shanghai" />
              <el-option label="二级" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="团队描述" :label-width="formLabelWidth">
            <el-input
              v-model="NewDoctorTeamInfo.teamDescribe"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input
              v-model="NewDoctorTeamInfo.phoneNum"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth">
            <el-input
              v-model="NewDoctorTeamInfo.addAddress"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="团队状态" :label-width="formLabelWidth">
            <el-select
              v-model="NewDoctorTeamInfo.addStatus"
              placeholder="请选择团队状态"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDoctorTeamFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addDoctorTeamFormVisible = false;addDoctorTeam()">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="4">
          <div>
            <div style="width: 100%;text-align: left;">
              <div style="font-size:18px;">我添加或加入的团队</div>
            </div>
            <div v-for="info in JoinedDoctorTeamInfo" :key="info.Creator" style="border: slategray solid 1px; margin-top: 10px">
              <div style="font-size: 16px;margin: 3px; color: #0281ff;">{{ info.TeamName }}医生团队</div>
              <div style="font-size: 13px;margin: 3px;">团队类型：{{ info.TeamType }}</div>
              <div style="font-size: 13px;margin: 3px;">创建者：{{ info.Creator }}</div>
              <div style="font-size: 13px;margin: 3px;">团队人数：{{ info.NumOfPeople }}</div>
              <div style="font-size: 13px;margin: 3px;">团队描述：{{ info.Describe }}</div>
              <div style="font-size: 13px;margin: 3px;">团队状态：{{ info.Status }}</div>
              <div>
                <el-button style="margin: 3px;margin-right: -3px;" type="primary" size="mini">新增</el-button>
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="primary" size="mini">删除</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div style="width:100%; text-align:center">
            <div style="font-size:20px">全科医生团队</div>
          </div>
          <el-table :data="DoctorTeamInfos" border style="margin-top: 7px;">
            <el-table-column label="操作" align="center">
              <el-button size="mini" @click="editDoctorTeamInfos()">编辑</el-button>
              <el-button size="mini" @click="deleteDoctorTeamInfos()">删除</el-button>
            </el-table-column>
            <el-table-column label="照片" align="center">
              <template slot-scope="scope">
                <img :src="scope.row.ImgUrl">
              </template>
            </el-table-column>
            <el-table-column prop="Name" label="姓名" align="center" />
            <el-table-column prop="Duty" label="团队职责" align="center" />
            <el-table-column prop="Title" label="职称" align="center" />
            <el-table-column prop="TeamAdmins" label="团队管理员" align="center" />
            <el-table-column prop="SignLocation" label="建档机构" align="center" />
            <el-table-column prop="OtherDescribe" label="其他描述" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DoctorTeam',
  data() {
    return {
      addDoctorTeamFormVisible: false,
      formLabelWidth: '130px',
      DoctorTeamInfos: [],
      JoinedDoctorTeamInfo: [{
        TeamName: '1',
        TeamType: '1',
        Creator: '1',
        NumOfPeople: '1',
        Describe: '1',
        Status: '1'
      },
      {
        TeamName: '1',
        TeamType: '1',
        Creator: '1',
        NumOfPeople: '1',
        Describe: '1',
        Status: '1'
      },
      {
        TeamName: '1',
        TeamType: '1',
        Creator: '1',
        NumOfPeople: '1',
        Describe: '1',
        Status: '1'
      }
      ],
      NewDoctorTeamInfo: {
        addName: '',
        addNum: '',
        addType: '',
        teamDescribe: '',
        phoneNum: '',
        addAddress: '',
        addStatus: ''
      },
      SearchTeamName: ''
    }
  },
  methods: {
    onSearch: function() {
    },
    addDoctorTeam: function() {
      alert(this.$data.NewDoctorTeamInfo.addName)
    },
    editDoctorTeamInfos: function() {
    },
    deleteDoctorTeamInfos: function() {
    }
  }
}
</script>
<link rel="stylesheet" href="https://www.layuicdn.com/layui-v2.5.6/css/layui.css">

