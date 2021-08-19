// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/about');
const express = require('express');
const about = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的about内容接口
about.get('/getAbout',(req,res) => {
    // 通过模型去查找数据库
    console.log("账号接口/api/about/getAbout --- 调用成功")
    models.About.find((err,data) => {
        if (err) {
            res.send("账号接口/api/about/getAbout"+err);
        } else {
            res.send("账号接口/api/about/getAbout"+data);
        }
    });
});

module.exports = about;
