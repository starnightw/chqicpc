// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/vjudge');
const express = require('express');
const vjudge = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的vjudge内容接口
vjudge.get('/getVJudge',(req,res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/vjudge/getVJudge --- 调用成功")
    models.VJudge.find((err,data) => {
        if (err) {
            res.send("账号接口/api/vjudge/getVJudge"+err);
        } else {
            res.send(data);
        }
    });
});

// vjudge.post('/addVjudge',(req, res) => {
//     console.log("vjudge运行")
//     let vJudge = new models.VJudge({
//         name : 'String',
//         recordContent : 'String'
//     })
//     vJudge.save((err,data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
//
// })

module.exports = vjudge;
