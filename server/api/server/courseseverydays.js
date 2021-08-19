"use strict";
const courseEveryDayModels = require('../../model/courseEveryday')
const express = require('express');
const courseEveryDay = express.Router();


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的所有的一个每日一题课程课程内容接口
courseEveryDay.get('/getCourseEveryDayWusList',(req, res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/course/getCourseEveryDayWusList --- 调用成功")
    courseEveryDayModels.CourseEveryday.find((err,data) => {
        if (err) {
            res.send("账号接口/api/course/getCourseEveryDayWusList"+err);
        } else {
            res.send(data);
        }
    });
});

// // 添加一个每日一题课程
// courseEveryDay.post('/addCourseEveryDay', (req, res) => {
//     let name = '课程'
//     let title = '课程title'
//     let videoLink = ''
//     let recordContent = ''
//     let newCourseEveryDay = new courseEveryDayModels.CourseEveryday({
//         name : name,
//         title : title,
//         videoLink : videoLink,
//         recordContent : recordContent
//     })
//     // 保存数据CourseEveryDay数据进mongoDB
//     console.log("保存数据CourseEveryDay数据进mongoDB")
//     newCourseEveryDay.save((err,data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// })

module.exports = courseEveryDay;
