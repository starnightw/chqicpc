module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8080',
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy: null,
        // proxy: { // 配置跨域处理 可以设置多个
        //     '/api': {
        //         target: 'localhost:8088',//跨域请求头信息
        //         changeOrigin: true,
        //         ws: false,
        //         secure: false, // 如果是https接口，需要配置这个参数
        //         pathRewrite: {
        //             '^/api': '/api'
        //         }
        //         //pathRewrite: {'^/api': '/'} 重写之后url为 http://a.abc.com:8081/xxxx
        //         //pathRewrite: {'^/api': '/api'} 重写之后url为 http://a.abc.com:8081/api/xxxx
        //     }
    }
}
