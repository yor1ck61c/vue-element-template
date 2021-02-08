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
          <el-button type="primary" @click="onSearch()">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addContractVisible = true">新增签约合同</el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        title="新增签约合同"
        :visible.sync="addContractVisible"
      >
        <el-form ref="addContract" :model="addContract" :rules="addContractRules">
          <el-form-item label="合同编号" prop="ContractNum" :label-width="formLabelWidth">
            <el-input
              v-model="addContract.ContractNum"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="甲方" prop="PartyA" :label-width="formLabelWidth">
            <el-input
              v-model="addContract.PartyA"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item label="乙方" :label-width="formLabelWidth">
            <el-input
              v-model="addContract.PartyB"
              autocomplete="off"
              style="width:90%"
            />
          </el-form-item>
          <el-form-item>
            <label>合同开始生效时间</label>
            <el-date-picker
              v-model="addContract.StartTime"
              type="date"
              placeholder="开始日期"
              style="width:150px;margin-left: 10px;"
            />
            <el-date-picker
              v-model="addContract.EndTime"
              type="date"
              placeholder="结束日期"
              style="width:150px; margin-left: 20px;"
            />
          </el-form-item>
          <el-form-item label="服务包" prop="ServePackage" :label-width="formLabelWidth">
            <el-select
              v-model="addContract.ServePackage"
              placeholder="请选择服务包"
            >
              <el-option label="一级" value="shanghai" />
              <el-option label="二级" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="确诊疾病" prop="Disease" style="margin-left: 52px;">
            <el-checkbox-group v-model="addContract.Disease">
              <el-checkbox label="心脏病" value="心脏病" />
              <el-checkbox label="高血压" value="高血压" />
              <el-checkbox label="糖尿病" value="糖尿病" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="检测指标" prop="TestTarget" :label-width="formLabelWidth">
            <el-select
              v-model="addContract.TestTarget"
              placeholder="请选择检测指标"
            >
              <el-option label="一级" value="shanghai" />
              <el-option label="二级" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="医生团队" prop="DoctorTeam" :label-width="formLabelWidth">
            <el-select
              v-model="addContract.DoctorTeam"
              placeholder="请选择检测指标"
            >
              <el-option label="一级" value="shanghai" />
              <el-option label="二级" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="设备序列号" :label-width="formLabelWidth">
            <el-input v-model="addContract.DeviceSerialNum" style="width: 90%" placeholder="设备序列号">
              <template slot="append">
                <el-button type="primary">添 加</el-button>
              </template>
            </el-input>
            <el-table :data="DeviceInfo" border style="margin-top: 20px;width: 90%;">
              <el-table-column prop="SerialNum" label="设备序列号" align="center" />
              <el-table-column prop="TypeName" label="类型名称" align="center" />
              <el-table-column label="操作" align="center">
                <el-button size="mini">详情</el-button>
                <el-button size="mini">删除</el-button>
              </el-table-column>
            </el-table>
          </el-form-item>
          <el-form-item label="合同模板" prop="ContractTemplate" :label-width="formLabelWidth">
            <el-select
              v-model="addContract.ContractTemplate"
              placeholder="请选择团队状态"
            >
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="缴费" prop="IsPaid" style="margin-left: 78px;">
            <el-radio-group v-model="addContract.IsPaid">
              <el-radio label="已缴费" value="true" />
              <el-radio label="未缴费" value="false" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="签约备注" style="margin-left: 52px;">
            <el-radio-group v-model="addContract.SignRemark">
              <el-radio label="出租" value="rent" />
              <el-radio label="出售" value="sale" />
            </el-radio-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addContractVisible = false">取 消</el-button>
          <el-button type="primary" @click="addContractInfo('addContract')">确 定</el-button>
        </div>
      </el-dialog>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="ManageSignDataTable" border style="font-size: 12px">
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
// import Axios from 'axios'
export default {
  name: 'ManageSign',
  data() {
    return {
      addContractVisible: false,
      formLabelWidth: '120px',
      addContract: {
        ContractNum: '',
        PartyA: '',
        PartyB: '',
        StartTime: '',
        EndTime: '',
        ServePackage: '',
        Disease: [],
        TestTarget: '',
        DoctorTeam: '',
        ContractTemplate: '',
        IsPaid: '',
        SignRemark: ''
      },
      ManageSignDataTable: [],
      SearchInfo: {
        ResidentName: '',
        StartTime: '',
        EndTime: '',
        ContractStatus: '',
        SignStatus: ''
      },
      DeviceInfo: {
        SerialNum: '',
        TypeName: ''
      },
      addContractRules: {
        ContractNum: [
          { required: true, message: '请输入合同编号', trigger: 'blur' }
        ],
        PartyA: [
          { required: true, message: '请输入甲方姓名', trigger: 'blur' }
        ],
        ServePackage: [
          { required: true, message: '请选择服务包', trigger: 'change' }
        ],
        Disease: [
          { type: 'array', required: true, message: '确诊疾病不能为空', trigger: 'change' }
        ],
        TestTarget: [
          { required: true, message: '检测指标不能为空', trigger: 'change' }
        ],
        DoctorTeam: [
          { required: true, message: '请选择医生团队', trigger: 'change' }
        ],
        ContractTemplate: [
          { required: true, message: '请选择合同模板', trigger: 'change' }
        ],
        IsPaid: [
          { required: true, message: '请选择缴费情况', trigger: 'change' }
        ]
      }
    }
  },
  created() {
    /* var that = this
     Axios.post('testURL').then((res) => {
      that.ManageSignDataTable = res.data.ManageSignDataTable
    })*/
  },
  methods: {
    onSearch: function() {},
    addContractInfo: function(addContractInfo) {
      this.$refs[addContractInfo].validate((valid) => {
        if (valid) {
          alert('can Submit')
          this.addContractVisible = false
        } else {
          alert('cannot Submit')
          return false
        }
      })
    }
  }
}
</script>
