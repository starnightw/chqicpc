<template>
  <div class="login_container">
    <div class="breadcrumb_box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员登录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="login_box">
      <h1 style="width: 50%">Login</h1>
      <!-- 登录表单区域-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名、账号-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮区域-->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
// import Cookies from 'js-cookie';

export default {
  name: 'Login',
  data () {
    return {
      // 这里是登录表单的数据绑定对象   username
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名的长度应在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码的长度应在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    },
    // 点击登录 实现登录方法
    login() {
      ElMessage.info('正在实现，本页面暂仅考虑管理员登录')
    }
      // console.log(this.loginForm.username)
      // console.log(this.loginForm.password)
    //   let params = {
    //     username : this.loginForm.username,
    //     password : this.loginForm.password
    //   };
    //   // 使用用户名密码登录
    //   this.$http.post('/api/user/login',params)
    //       .then((response) => {
    //         // 响应成功回调
    //         ElMessage.success('res   token'+ response.data.msg)
    //         window.localStorage.setItem('token', response.data.token)
    //         Cookies.set("token",response.data.token)
    //         window.location.pathname = '/administrator'
    //         return response;
    //       })
    //       .then((response) => {
    //         console.log(response)
    //       })
    //       .catch((reject) => {
    //         console.log(reject)
    //       });
    // }
  }
}
</script>

<style scoped>
.login_container{
  text-align:center
}

.breadcrumb_box{
  height: 30px;
  padding-left: 30px;
  padding-top: 20px;
  background-color: #f5f5f5;
}

.login_box{
  width: 350px;
  height: 250px;
  background-color: #fff;
  border-radius: 3px;
  margin: 10px auto;
}
.login_form{
  width: 80%;
  padding: 10px 10%;
}
</style>
