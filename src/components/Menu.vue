<template>
  <div class="menu" style="background-color: #f8f8f8;">
    <div class="container" style="text-align:center">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f8f8f8">
        <a class="navbar-brand" href="https://icpc.qlu.edu.cn/#/">QLU</a>
        <el-menu-item :index=item.id v-for="(item, index) in pages" :key="index" @click='pageShow(item.id)'>
          <i :class=item.icon></i>{{item.name}}
        </el-menu-item>
<!--        </el-row>-->


<!--        下边的是管理员管理界面-->
<!--        <el-menu-item :index=item.id v-for="(item, index) in adminPage" :key="index" @click='adminShow(item.id)'>-->
<!--          <i :class=item.icon></i>{{item.name}}-->
<!--        </el-menu-item>-->
<!--        <el-menu-item index='9' @click='adminShow(adminPage[adminActive].id)'>-->
<!--          <i :class="adminPage[adminActive].icon"></i>{{adminPage[adminActive].name}}-->
<!--        </el-menu-item>-->
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      // 默认显示页面
      activeIndex: '2',
      adminActive: '0',
      // 导航使用元素数据   人物志：character
      pages: [
        {
          id: 1,
          icon: 'el-icon-star-on',
          name: '赛事列表',
          path: '/event'
        }, {
          id: 2,
          icon: 'el-icon-s-custom',
          name: '人物志',
          path: '/'
        }, {
          id: 3,
          icon: 'el-icon-s-data',
          name: 'DomJudge',
          path: '/domjudge'
        }, {
          id: 4,
          icon: 'el-icon-video-camera-solid',
          name: '视频课程',
          path: '/course'
        }, {
          id: 5,
          icon: 'el-icon-s-order',
          name: 'VJudge题集',
          path: '/vJudge'
        }, {
          id: 6,
          icon: 'el-icon-upload',
          name: 'ICPC私云',
          path: '/cloud'
        }, {
          id: 7,
          icon: 'el-icon-caret-right',
          name: '返回QLU OJ',
          path: 'http://icpc.qlu.edu.cn/#/'
        },{
          id: 8,
          icon: 'el-icon-user-solid',
          name: '登录',
          path: '/login'
        }
        // {
        //   id: 8,
        //   icon: 'el-icon-info',
        //   name: '关于',
        //   path: '/about'
        // }
      ],
      // adminPage: [
      //   {
      //     id: 8,
      //     icon: 'el-icon-user-solid',
      //     name: '登录',
      //     path: '/login'
      //   },
      //   // {
        //   id: 10,
        //   icon: 'el-icon-s-tools',
        //   name: '后台管理',
        //   path: '/administrator'
        // }
      // ]
    };
  },
  // 路由变化
  watch: {
    '$route':'getPath'
  },
  methods: {
    // 监听路由变化
    getPath(){
      // console.log(this.$route.path);
      for (const i in this.pages) {
        if((this.$route.path) === this.pages[i].path){
          this.activeIndex = this.pages[i].id
        }
        // else if((this.$route.path) === this.adminPage[this.adminActive].path){
        //   this.activeIndex = this.adminPage[this.adminActive].id
        // }
      }
    },
    // 切换导航页面功能实现
    pageShow: function (index) {
      this.activeIndex = index
      // console.log(this.activeIndex)
      if (index === 3) {
        window.open('http://icpc.qlu.edu.cn/domjudge', '_self')
      } else if (index === 7) {
        window.open('http://icpc.qlu.edu.cn/#/', '_self')
      } else {
        if (this.$router.currentRoute.path !== this.pages[index - 1].path) {
          this.$router.push(this.pages[index - 1].path)
        }
      }
    },
    // admin 登录实现
    // adminShow: function (index) {
    //   this.activeIndex = index
    //   if( index === 8 ) {
    //     this.$router.push(this.adminPage[index-9].path)
    //   }else if( index === 9) {
    //     this.$router.push(this.adminPage[index-9].path)
    //   }
    // }
  }
}

</script>

<style scoped>
  .menu {
    background-color: #FFFFFF;
  }

  .navbar-brand {
    color: #777;
    float: left;
    /*height: 50px;*/
    padding: 15px 15px;
    font-size: 18px;
    line-height: 30px;
  }

  .menu .el-menu-item{
    padding: 0 10px;
  }

  .el-menu{
    text-align: justify;
  }

  .el-menu-item [class^=el-icon-] {
    margin-right: 0;
    margin-left: 5px;

  }


  a{text-decoration: none;}
</style>
