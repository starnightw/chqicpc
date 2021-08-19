<template>
  <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane v-for="(item, index) in vJudgeData" :key="index" :label="item.name">
      <div v-html="item.recordContent"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import marked from 'marked'
export default {
  name: "VJudges",
  data() {
    return {
      vJudgeData: []
    }
  },
  methods: {

  },
  mounted() {
    // 获取数据渲染页面
    this.$http.get('/api/vjudge/getVJudge')
        .then((response) => {
          // 响应成功回调
          this.vJudgeData = response.data
          // console.log(response.data)
          // ElMessage.info('贡献榜'+ response)
        }).then(() => {
          for(let i in this.vJudgeData){
            this.vJudgeData[i].recordContent = marked(this.vJudgeData[i].recordContent)
          }
        })
        .catch((reject) => {
          console.log(reject)
        });
  }
}
</script>

<style scoped>
</style>
