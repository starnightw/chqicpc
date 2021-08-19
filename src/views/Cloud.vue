<template>
  <div style="padding: 15px; width: 50%; margin: 0 auto; text-align: center" >
    <div v-html="recordContent"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: "Cloud",
  data() {
    return {
      recordContent: ''   // 云盘内容
    }
  },
  mounted() {
    // 获取数据渲染页面
    this.$http.get('/api/cloud/getCloud')
        .then((response) => {
          // 响应成功回调
          this.recordContent = marked(response.data[0].recordContent)
          // console.log(response.data)
          // ElMessage.info('贡献榜'+ response)
        })
        .catch((reject) => {
          console.log(reject)
        });
  }
}
</script>

<style scoped>

</style>
