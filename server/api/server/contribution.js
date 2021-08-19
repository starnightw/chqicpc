// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/contribution');
const express = require('express');
const contribution = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的贡献者内容接口
contribution.get('/getContribution',(req,res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/chara/getContribution --- 调用成功")
    models.Contribution.find((err,data) => {
        if (err) {
            res.send("账号接口/api/chara/getContribution"+err);
        } else {
            // console.log(data+'贡献者')
            res.send(data);
        }
    });
});

module.exports = contribution;
