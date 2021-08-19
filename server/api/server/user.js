// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/user');
const express = require('express');
// 引入jwt token工具
const JwtUtil = require('../jwt');
const user = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
user.post('/addLoginUser',(req,res) => {
    console.log("账号接口/api/user/addLoginUser --- 调用成功")
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let username = req.body.username
    let password = md5(req.body.password)
    let newUsername = new models.User({
        username : username,
        password : password
    });
    console.log(req.body)
    // 保存数据newUsername数据进mongoDB
    console.log("保存数据newUsername数据进mongoDB")
    newUsername.save((err,data) => {
        if (err) {
            res.send("账号接口/api/user/addLoginUser"+err);
        } else {
            res.send('addLoginUser successed'+ data);
        }
    });
});
// 获取已有账号接口
user.get('/getUserList',(req,res) => {
    // 通过模型去查找数据库
    console.log("账号接口/api/login/getUserList --- 调用成功")
    models.User.find((err,data) => {
        if (err) {
            res.send("账号接口/api/user/getUserList"+err);
        } else {
            res.send("账号接口/api/user/getUserList"+data);
        }
    });
});

// 使用token实现登录  返回相应的token
user.post('/login',(req, res) => {
    let username = req.body.username
    let password = md5(req.body.password) //使用md5 为其加密后使用
    console.log(username+'----api login')
    console.log(password+'-----api login')
    new Promise((resolve, reject) => {
        // 根据用户名查询用户
        models.User.findOne({'username': username}).exec((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result)
            }
        })
    }).then((result) =>{
        console.log(result + '查询结果');
        if(result){
            let pwd = result.password;
            if(password === pwd){
                // 登录成功，添加token验证
                let _id = result._id.toString();
                // 将用户id传入并生成token
                let jwt = new JwtUtil(_id);
                let token = jwt.generateToken();
                // 将 token 返回给客户端
                res.send({status:200,msg:'登陆成功',token:token});
            }else{
                res.send({status:400,msg:'账号密码错误'});
            }
        }else{
            res.send({status:404,msg:'账号不存在'})
        }
    }).catch((err) => {
        console.log(err);
        res.send({status:500,msg:'账号密码错误'});
    })
})


module.exports = user;

// 实现md5加密 加盐
function md5(data) {
    var Buffer = require("buffer").Buffer;
    var buf = new Buffer.from(data + 'acm');
    var str = buf.toString("binary");
    var crypto = require("crypto");
    return crypto.createHash("md5WithRSAEncryption").update(str).digest("hex");
}
