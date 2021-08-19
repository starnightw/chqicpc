<template>
<!--  课程-->
  <div>   <!--  @tab-click="handleClick"-->
    <el-tabs v-model="activeName" v-bind:style="{minHeight: Height+'px'}">
      <el-tab-pane label="吴老师课程" name="first">
        <el-row>
          <el-col :span="6">
            <el-menu default-active='0' style="border: 1px solid #eaeaea;">
              <el-menu-item v-for="(item, index) in coursesWuList" :index='index' @click='change1(index)' :key="index">
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="18"  style="background-color: #f2f2f5">
            <el-container class='outter-container'>
              <el-container class='frame-container' v-if="this.ifCourseWuVideo === 'true'">
                <h4>{{ this.nowTimeShowTitle1 }}</h4>
                <iframe
                    class='frame'
                    :src='this.nowTimeShowVideo1'
                    border='0'
                    framespacing='0'
                    allowfullscreen='true'
                >
                </iframe>
              </el-container>
              <h2 v-if="this.ifCourseWuVideo === 'false'">视频还未上线</h2>
            </el-container>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="集训队每日一题" name="second" >
        <el-row>
          <el-col :span="6">
            <el-menu default-active='0' style="border: 1px solid #eaeaea;">
              <el-menu-item v-for="(item, index) in coursesEveryDayList" :index='index' @click='change2(index)' :key="index">
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="18"  style="background-color: #f2f2f5">
            <el-container class='outter-container'>
              <el-container class='frame-container' v-if="this.ifCourseEveryVideo === 'true'">
                <el-row justify="end">
                  <el-col :span="15">
                    <h4>{{ this.nowTimeShowTitle2 }}</h4>
                  </el-col>
                  <el-col :span='3'>
                    <el-button type="text" @click="open()">更多>></el-button>
                  </el-col>
                </el-row>
                <iframe
                    class='frame'
                    :src='this.nowTimeShowVideo2'
                    border='0'
                    framespacing='0'
                    allowfullscreen='true'
                >
                </iframe>
              </el-container>
              <h2 v-if="this.ifCourseEveryVideo === 'false'">
                <div style="padding: 15px; margin: 0 auto; text-align: center" >
                  <h4>{{ this.nowTimeShowTitle2 }}</h4>
                  <div v-html="blog"></div>
                </div>
              </h2>
            </el-container>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-container class='down vertial-hide' v-if="(this.activeName=== 'first')">
      <el-button-group>
        <el-button class='down-button' @click='downVideo'>
          下载本节课视频
        </el-button>
        <el-button type='primary' class='down-button' @click='downPdf'>
          下载本节课配套文档
        </el-button>
      </el-button-group>
    </el-container>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Courses",
  data () {
    return {
      current: 0,
      activeName: 'first',
      Height: 0,
      nowTimeShowIndex1: 0,
      nowTimeShowTitle1: '',
      nowTimeShowVideo1: '',
      coursesWuList : [],
      ifCourseWuVideo: 'true',

      nowTimeShowIndex2: 0,
      nowTimeShowTitle2: '',
      nowTimeShowVideo2: '',
      coursesEveryDayList : [],
      ifCourseEveryVideo: 'true',
      title: '',
      blog: ''
    }
  },
  mounted() {
    // 动态设置内容高度 让footer始终居底   header+footer的高度是240
    this.Height = document.documentElement.clientHeight - 240;
    // 监听浏览器窗口变化
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -240}

    // 获取数据渲染页面  吴老师课程
    this.$http.get('/api/course/getCourseWusList')
        .then((response) => {
          // 响应成功回调
          this.coursesWuList = response.data
          this.nowTimeShowTitle1 = response.data[0].title
          this.nowTimeShowVideo1 = response.data[0].videoLink
          if(response.data[0].videoLink === ''){
            this.ifCourseWuVideo = 'false'
          }
        })
        .catch((reject) => {
          console.log(reject)
        });

    // 获取数据渲染页面  每日一题
    this.$http.get('/api/courseday/getCourseEveryDayWusList')
        .then((response) => {
          // 响应成功回调
          this.coursesEveryDayList = response.data
          this.nowTimeShowTitle2 = response.data[0].title
          this.nowTimeShowVideo2 = response.data[0].videoLink
          if(response.data[0].videoLink === ''){
            this.ifCourseEveryVideo = 'false'
          }
        })
        .catch((reject) => {
          console.log(reject)
        });
  },
  methods: {
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },

    change1(index){
      this.nowTimeShowIndex1 = index
      this.nowTimeShowTitle1 = this.coursesWuList[index].title
      this.nowTimeShowVideo1 = this.coursesWuList[index].videoLink
      if(this.coursesWuList[index].videoLink === ''){
        this.ifCourseWuVideo = 'false'
      }else {
        this.ifCourseWuVideo = 'true'
      }
    },

    change2(index){
      this.nowTimeShowIndex2 = index
      this.nowTimeShowTitle2 = this.coursesEveryDayList[index].title
      this.nowTimeShowVideo2 = this.coursesEveryDayList[index].videoLink
      if(this.coursesEveryDayList[index].videoLink === ''){
        this.ifCourseEveryVideo = 'false'
      }else {
        this.ifCourseEveryVideo = 'true'
      }
      this.title = this.coursesEveryDayList[index].title
      this.blog = marked(this.coursesEveryDayList[index].recordContent)
    },

    open() {
      this.$alert(marked(this.coursesEveryDayList[this.nowTimeShowIndex2].recordContent), this.coursesEveryDayList[this.nowTimeShowIndex2].title, {
        confirmButtonText: '确定',
        dangerouslyUseHTMLString: true
      });
    },

    // 下载实现方法
    downPdf() {
      window.location = 'https://icpc.qlu.edu.cn/course/' + this.coursesWuList[this.nowTimeShowIndex1].downPdfLink
    },
    downVideo() {
      window.location = 'https://icpc.qlu.edu.cn/course/' + this.coursesWuList[this.nowTimeShowIndex1].downVideoLink
    }
  }
}
</script>

<style scoped>
.el-container {
  color: rgb(34, 34, 34);
  display: flex;
  min-width: 360px;
}

.el-menu-item {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  column-count: 1;
}

.el-menu-item::-webkit-scrollbar {
  display: none;
}

.el-aside {
  flex: 1;
  transition: 500ms;
}

/* .el-aside:hover {
  flex: 2;
} */

.container{
  width: 90%;
  padding-left: 10%;
}

.outter-container {
  flex: 4 !important;
  text-align: center;
}

.frame-container {
  padding: 20px;
  flex-direction: column !important;
  background: rgb(242, 242, 245);
}

h4 {
  margin-block-start: 0.5em;
  margin-block-end: 0.8em;
  color: rgb(21, 41, 112);
  font-weight: 600;
}

.frame {
  /*padding-left: 10%;*/
  height: 500px;
  width: 100%;
  max-width: 800px;
  transition: 200ms;
}

.down {
  position: absolute;
  right: 0;
  /*bottom: 20px;*/
  padding-top: 35px;
}

.down-button {
  width: 160px;
}

@media (max-height: 560px) {
  .vertial-hide {
    display: none;
  }
}

@media (min-width: 1150px) {
  .frame {
    height: 600px;
    max-width: 900px;
  }
}

@media (max-width: 1149px) {
  .frame {
    height: 450px;
    max-width: 700px;
  }
}

@media (max-width: 640px) {
  .el-container {
    flex-direction: column-reverse !important;
  }

  .el-header {
    text-align: center;
    line-height: 40px;
    height: 40px !important;
    font-size: 1rem;
  }

  .outter-container {
    padding: 0;
  }

  .frame-container {
    padding: 0;
  }

  .frame-container h4 {
    margin-left: 10px;
  }

  .frame {
    height: 250px;
  }

  .el-aside {
    width: 100% !important;
  }
}
</style>
