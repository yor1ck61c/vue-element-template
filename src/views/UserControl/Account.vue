<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-dialog
            title="新增用户"
            :visible.sync="addNewAccount"
          >
            <el-form ref="newAccountInfo" :model="newAccountInfo" :rules="AccountRule">
              <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                <el-input
                  v-model="newAccountInfo.username"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="newAccountInfo.password"
                  :type="passwordType"
                  name="password"
                  autocomplete="off"
                  style="width: 300px;"
                />
                <span class="show-pwd" style="margin-left: 20px;" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
              <el-form-item label="角色" :label-width="formLabelWidth" prop="role">
                <el-radio-group v-model="newAccountInfo.role">
                  <el-radio label="admin" />
                  <el-radio label="user" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="头像" :label-width="formLabelWidth" prop="avatar">
                <el-input
                  v-model="newAccountInfo.avatar"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="简介" :label-width="formLabelWidth" prop="introduction">
                <el-input
                  v-model="newAccountInfo.introduction"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="addNewAccount = false">取 消</el-button>
              <el-button type="primary" @click="saveNewAccount('newAccountInfo')">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog
            title="更改用户信息"
            :visible.sync="editAccountInfo"
          >
            <el-form ref="updateRef" :model="afterUpdate" :rules="AccountRule">
              <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
                <el-input
                  v-model="afterUpdate.username"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="afterUpdate.password"
                  :type="passwordType"
                  autocomplete="off"
                  name="password"
                  style="width: 300px;"
                />
                <span class="show-pwd" style="margin-left: 20px;" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
              <el-form-item label="角色" :label-width="formLabelWidth" prop="role">
                <el-radio-group v-model="afterUpdate.role">
                  <el-radio label="admin" />
                  <el-radio label="user" />
                </el-radio-group>
              </el-form-item>
              <el-form-item label="头像" :label-width="formLabelWidth" prop="avatar">
                <el-input
                  v-model="afterUpdate.avatar"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
              <el-form-item label="简介" :label-width="formLabelWidth" prop="introduction">
                <el-input
                  v-model="afterUpdate.introduction"
                  autocomplete="off"
                  style="width: 300px;"
                />
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="editAccountInfo = false">取 消</el-button>
              <el-button type="primary" @click="updateAccount('updateRef')">确 定</el-button>
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
                    <el-button type="text" size="small" @click="editAccount(scope.row)">编辑</el-button>
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
import { handleUpdate } from '@/api/UserControl/Account'
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
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: ''
      },
      afterUpdate: {
        username: '',
        password: '',
        role: '',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: ''
      },
      AccountRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'blur' }
        ],
        avatar: [
          { required: true, message: '请输入头像地址', trigger: 'blur' }
        ],
        introduction: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ]
      },
      addNewAccount: false,
      editAccountInfo: false,
      formLabelWidth: '230px',
      passwordType: 'password'
    }
  },
  created() {
    this.queryAccountInfo()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    queryAccountInfo: function() {
      getAccountInfo().then((res) => {
        this.AccountInfo = res.data
      })
    },
    saveNewAccount: function(data) {
      this.$refs[data].validate((valid) => {
        if (valid) {
          saveAccount(this.newAccountInfo).then(() => {
            Message.success({
              message: '保存成功！'
            })
          })
          this.addNewAccount = false
          setTimeout(() => {
            this.queryAccountInfo()
          }, 500)
        } else {
          Message.error({
            message: '请填写正确的信息！'
          })
          return false
        }
      })
    },
    updateAccount: function(data) {
      this.$refs[data].validate((valid) => {
        if (valid) {
          handleUpdate(this.afterUpdate).then(() => {
            Message.success({
              message: '更改成功！'
            })
            this.editAccountInfo = false
            setTimeout(() => {
              this.queryAccountInfo()
            }, 500)
          })
        } else {
          Message.error({
            message: '请填写正确的信息！'
          })
          return false
        }
      })
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
    },
    editAccount: function(data) {
      this.editAccountInfo = true
      this.afterUpdate = data
    }
  }
}
</script>
