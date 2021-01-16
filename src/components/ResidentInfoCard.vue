<template>
  <p>Github: <el-link :href="github">{{ github }}</el-link></p>
</template>

<script>
export default {
  name: 'ResidentInfoCard',
  data() {
    return {
      'github': 'https://github.com/yor1ck61c'
    }
  }
}
</script>
