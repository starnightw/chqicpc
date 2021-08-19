import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'
import Http from './assets/js/http';
// import * as store from "core-js";
// import Cookies from "js-cookie";
import 'github-markdown-css/github-markdown.css'

const app = createApp(App).use(router)
installElementPlus(app)
app.mount('#app')

app.config.globalProperties.$http = Http;

// router.beforeEach((to, from, next) => {
//     // eslint-disable-next-line no-debugger
//     debugger
//     if (to.path === '/administrator') {
//         if (Cookies.get('token') === '') {//我是将token存在了cookies和local中，你可以将这里简单的修改
//             next({
//                 path: '/login'
//             })
//         } else {
//             next()//这一步必须有，必须让函数resolve，不然路由不能跳转
//         }
//     } else {
//         next()
//     }
// })

