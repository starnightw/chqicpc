// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const express = require('express');
const user = require("./server/user"); // 用户
// const about = require("./server/about"); // 关于
const characters = require("./server/characters"); // 人物志
const contribution = require("./server/contribution"); // 贡献记录
const courses = require("./server/courses") // 吴老师课程
const courseEveryDays = require("./server/courseseverydays") // 吴老师课程
const cloud = require("./server/cloud"); // 云盘
// const events = require("./server/events"); // 赛事界面
const vjudge = require("./server/vjudges")
const app = express();

/** 指向server的user***/
app.use('/api/user', user);
// app.use('/api/about', about);
app.use('/api/chara', characters);
app.use('/api/contri', contribution);
app.use('/api/course', courses)
app.use('/api/courseday', courseEveryDays);
app.use('/api/cloud', cloud);
// app.use('/api/event', events); // 下次一定
app.use('/api/vjudge', vjudge)

module.exports = app;

