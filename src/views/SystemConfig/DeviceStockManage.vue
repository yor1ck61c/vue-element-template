<template>
  <el-container>
    <el-header>
      <div id="Search" style="margin-top: 20px">
        <el-form :inline="true" :model="SearchInfo" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="SearchInfo.EquipmentSerialNumber"
              placeholder="设备序列号"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="SearchInfo.EquipmentManufacturer"
              placeholder="设备厂商"
              style="width: 150px"
            >
              <el-option label="HUAWEI" value="HUAWEI" />
              <el-option label="HONOR" value="HONOR" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="SearchInfo.DeviceType"
              placeholder="设备型号"
              style="width: 150px"
            >
              <el-option label="Mate40Pro" value="Mate40Pro" />
              <el-option label="Honor 30" value="Honor 30" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="SearchInfo.UsageStatus"
              placeholder="使用状态"
              style="width: 150px"
            >
              <el-option label="状态1" value="状态1" />
              <el-option label="状态2" value="状态2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="SearchInfo.ProcessStatus"
              placeholder="运行状态"
              style="width: 150px"
            >
              <el-option label="状态1" value="状态1" />
              <el-option label="状态2" value="状态2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit()">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addDeviceStockManageFormVisible = true">设备入库</el-button>
          </el-form-item>
        </el-form>
        <el-dialog title="设备入库" :visible.sync="addDeviceStockManageFormVisible">
          <el-form :model="NewDeviceStockManageInfo" :rules="addDeviceStockManageRule" style="font-size: 12px">
            <el-form-item label="设备类型" prop="addEquipmentType" :label-width="formLabelWidth">
              <el-select
                v-model="NewDeviceStockManageInfo.addEquipmentType"
                placeholder="请选择设备类型"
              >
                <el-option label="血糖仪" value="血糖仪" />
                <el-option label="血压计" value="血压计" />
                <el-option label="便携式心电仪" value="便携式心电仪" />
              </el-select>
            </el-form-item>
            <el-form-item label="设备厂商" prop="addEquipmentManufacturer" :label-width="formLabelWidth">
              <el-input
                v-model="NewDeviceStockManageInfo.addEquipmentManufacturer"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="设备型号" prop="addEquipmentModel" :label-width="formLabelWidth">
              <el-input
                v-model="NewDeviceStockManageInfo.addEquipmentModel"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="设备序列号" prop="addEquipmentSerialNumber" :label-width="formLabelWidth">
              <el-input
                v-model="NewDeviceStockManageInfo.addEquipmentSerialNumber"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="运行状态" :label-width="formLabelWidth">
              <el-select
                v-model="NewDeviceStockManageInfo.addUsageStatus"
                placeholder="请选择运行状态"
              >
                <el-option label="正常运行" value="shanghai" />
                <el-option label="正常运行" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="使用状态" :label-width="formLabelWidth">
              <el-select
                v-model="NewDeviceStockManageInfo.addIllustration"
                placeholder="请选择使用状态"
              >
                <el-option label="空闲" value="shanghai" />
                <el-option label="忙碌" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="设备名称" :label-width="formLabelWidth">
              <el-input
                v-model="NewDeviceStockManageInfo.addEquipmentName"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="设备别名" :label-width="formLabelWidth">
              <el-input
                v-model="NewDeviceStockManageInfo.addEquipmentAliases"
                autocomplete="off"
              />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addDeviceStockManageFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addDeviceStockManageFormVisible = false;addDeviceStockManage()">保 存</el-button>
          </div>
        </el-dialog>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="DeviceStockManageInfos" border style="font-size: 12px">
            <el-table-column label="操作" align="center">
              <el-button size="mini">配置服务</el-button>
              <el-button size="mini">编辑</el-button>
              <el-button size="mini">删除</el-button>
            </el-table-column>
            <el-table-column prop="EquipmentManufacturer" label="设备厂商" align="center" />
            <el-table-column prop="EquipmentModel" label="设备型号" align="center" />
            <el-table-column prop="EqumentSerialNumber" label="设备序列号" align="center" />
            <el-table-column prop="Illustration" label="使用状态" align="center" />
            <el-table-column prop="UsageStatus" label="运行状态" align="center" />
            <el-table-column prop="StateBinder" label="状态绑定人" align="center" />
            <el-table-column prop="PhoneNumber" label="手机号" align="center" />
            <el-table-column prop="StorageTime" label="入库时间" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DeviceStockManage',
  data() {
    return {
      DeviceStockManageInfos: [],
      SearchInfo: {
        EquipmentSerialNumber: '',
        EquipmentManufacturer: '',
        DeviceType: '',
        UsageStatus: '',
        ProcessStatus: ''
      },
      addDeviceStockManageFormVisible: false,
      NewDeviceStockManageInfo: {
        addEquipmentManufacturer: '',
        addEquipmentModel: '',
        addEqumentSerialNumber: '',
        addIllustration: '',
        addUsageStatus: '',
        addStateBinder: '',
        addPrice: '',
        addPhoneNumber: '',
        addStorageTime: ''
      },
      formLabelWidth: '120px',
      addDeviceStockManageRule: {
        addEquipmentType: [
          { required: true, message: '请输入设备类型', trigger: 'blur' }
        ],
        addEquipmentManufacturer: [
          { required: true, message: '请输入设备厂商', trigger: 'blur' }
        ],
        addEquipmentModel: [
          { required: true, message: '请输入设备型号', trigger: 'blur' }
        ],
        addEquipmentSerialNumber: [
          { required: true, message: '请输入设备序列号', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
  },
  methods: {
    addDeviceStockManage: function() {
    }
  }
}
</script>
