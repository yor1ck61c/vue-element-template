<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col>
          <el-tabs v-model="activeCard">
            <el-tab-pane label="选项卡1" name="card1">选项卡1内容</el-tab-pane>
            <el-tab-pane label="选项卡2" name="card2">选项卡2内容</el-tab-pane>
            <el-tab-pane label="选项卡3" name="card3">选项卡3内容</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'RecordDetails',
  data() {
    return {
      activeCard: 'card3'
    }
  },
  methods: {
    back: function() {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
