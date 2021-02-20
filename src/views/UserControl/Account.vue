<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-dialog
            title="新增用户"
            :visible.sync="addNewAccount"
          >
            <el-form :model="newAccountInfo">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input
                  v-model="newAccountInfo.username"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input
                  v-model="newAccountInfo.password"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="角色" :label-width="formLabelWidth">
                <el-radio-group v-model="newAccountInfo.role">
                  <el-radio label="admin" />
                  <el-radio label="user" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="头像" :label-width="formLabelWidth">
                <el-input
                  v-model="newAccountInfo.avatar"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="简介" :label-width="formLabelWidth">
                <el-input
                  v-model="newAccountInfo.introduction"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="addNewAccount = false">取 消</el-button>
              <el-button type="primary" @click="saveNewAccount(newAccountInfo)">确 定</el-button>
            </div>
          </el-dialog>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>账号管理</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="addNewAccount=true">新增用户</el-button>
            </div>
            <div>
              <el-table :data="AccountInfo" border style="font-size: 13px">
                <el-table-column prop="id" label="序号" align="center" />
                <el-table-column prop="username" label="用户名" align="center" />
                <el-table-column prop="role" label="角色" align="center" />
                <el-table-column label="操作" align="center">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small" style="color: #ff0000" @click="deleteAccount(scope.row)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { getAccountInfo } from '@/api/UserControl/Account'
import { saveAccount } from '@/api/UserControl/Account'
import { handleDelete } from '@/api/UserControl/Account'
import { Message } from 'element-ui'

export default {
  name: 'Account',
  data() {
    return {
      AccountInfo: [],
      newAccountInfo: {
        username: '',
        password: '',
        role: '',
        avatar: '',
        introduction: ''
      },
      addNewAccount: false,
      formLabelWidth: '230px'
    }
  },
  mounted() {
    this.queryAccountInfo()
  },
  methods: {
    queryAccountInfo: function() {
      getAccountInfo().then((res) => {
        this.AccountInfo = res.data
      })
    },
    saveNewAccount: function(data) {
      saveAccount(data).then((res) => {
        Message.success({
          message: '保存成功！'
        })
      })
      this.addNewAccount = false
      setTimeout(() => {
        this.queryAccountInfo()
      }, 500)
      // alert(data.roles)
    },
    deleteAccount: function(data) {
      handleDelete(data).then(() => {
        Message.success({
          message: '删除成功！'
        })
      })
      setTimeout(() => {
        this.queryAccountInfo()
      }, 500)
    }
  }
}
</script>
