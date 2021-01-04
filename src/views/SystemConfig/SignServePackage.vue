<template>
  <el-container>
    <el-header>
      <div id="Search" style="margin-top: 20px">
        <el-form :inline="true" :model="SearchInfo" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="SearchInfo.PackageName"
              placeholder="服务包名称"
            />
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="SearchInfo.PackageLevel"
              placeholder="服务包等级"
            >
              <el-option label="一级" value="一级" />
              <el-option label="二级" value="二级" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addServePackageFormVisible = true">添加服务包</el-button>
          </el-form-item>
        </el-form>
        <el-dialog
          title="添加服务包"
          :visible.sync="addServePackageFormVisible"
        >
          <el-form :model="NewServePackageInfo">
            <el-form-item label="服务包名称" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addName"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="服务包编号" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addNum"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="服务包等级" :label-width="formLabelWidth">
              <el-select
                v-model="NewServePackageInfo.addLevel"
                placeholder="请选择服务包等级"
              >
                <el-option label="一级" value="shanghai" />
                <el-option label="二级" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="服务包类型" :label-width="formLabelWidth">
              <el-select
                v-model="NewServePackageInfo.addType"
                placeholder="请选择服务包类型"
              >
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="服务包状态" :label-width="formLabelWidth">
              <el-select
                v-model="NewServePackageInfo.addStatus"
                placeholder="请选择服务包状态"
              >
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="适应人群" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addFitPeople"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="服务包价格(元)" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addPrice"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="服务包优惠价格" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addDisPrice"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item label="服务说明" :label-width="formLabelWidth">
              <el-input
                v-model="NewServePackageInfo.addDescribe"
                autocomplete="off"
              />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="addServePackageFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addServePackageFormVisible = false;addServePackage()">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-table :data="ServePackageInfos" border>
            <el-table-column label="操作" align="center">
              <el-button size="mini">编辑</el-button>
              <el-button size="mini">删除</el-button>
            </el-table-column>
            <el-table-column prop="Name" label="名称" align="center" />
            <el-table-column prop="Level" label="等级" align="center" />
            <el-table-column prop="FitPeople" label="适用人群" align="center" />
            <el-table-column prop="Illustration" label="说明" align="center" />
            <el-table-column prop="Price" label="价格" align="center" />
            <el-table-column prop="Status" label="状态" align="center" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'Test',
  data() {
    return {
      ServePackageInfos: [],
      SearchInfo: {
        PackageName: '',
        PackageLevel: ''
      },
      addServePackageFormVisible: false,
      NewServePackageInfo: {
        addName: '',
        addNum: '',
        addLevel: '',
        addType: '',
        addStatus: '',
        addFitPeople: '',
        addPrice: '',
        addDisPrice: '',
        addDescribe: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    var that = this
    Axios.post(
      'https://www.fastmock.site/mock/16fddfe65af12b42183595cffa0358a8/getDeviceData/device_info'
    ).then((res) => {
      that.ServePackageInfos = res.data.ServePackageInfos
    })
  },
  methods: {
    addServePackage: function() {
    }
  }
}
</script>
