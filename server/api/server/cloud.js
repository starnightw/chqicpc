// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/cloud');
const express = require('express');
const cloud = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的cloud内容接口
cloud.get('/getCloud',(req,res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/cloud/getCloud --- 调用成功")
    models.Cloud.find((err,data) => {
        if (err) {
            res.send("账号接口/api/cloud/getCloud"+err);
        } else {
            res.send(data);
        }
    });
});


// 添加cloud内容
// cloud.post('/addCloud',(req,res) => {
//     console.log("账号接口/api/cloud/addCloud --- 调用成功")
//     // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
//     let cloud = new models.Cloud({
//         recordContent : 'assss',
//     });
//     console.log(req.body)
//     console.log(req.body.recordContent+'----api cloud')
//     // 保存数据newUsername数据进mongoDB
//     console.log("保存数据newUsername数据进mongoDB")
//     cloud.save((err,data) => {
//         if (err) {
//             res.send("账号接口/api/cloud/addCloud "+err);
//         } else {
//             res.send(data);
//         }
//     });
// });


module.exports = cloud;
