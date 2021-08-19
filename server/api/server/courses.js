"use strict";
const courseWuModels = require('../../model/courseWu');
const express = require('express');
const courseWu = express.Router();


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的所有的吴老师课程内容接口
courseWu.get('/getCourseWusList',(req,res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/course/getCourseWusList --- 调用成功")
    courseWuModels.CourseWu.find((err,data) => {
        if (err) {
            res.send("账号接口/api/course/getCourseWusList"+err);
        } else {
            res.send(data);
        }
    });
});

// // 添加一个吴老师课程
// courseWu.post('/addCourseWu', (req, res) => {
//     let name = '课程'
//     let title = '课程title'
//     let videoLink = ''
//     let downPdfLink = ''
//     let downVideoLink = ''
//     let newCourseWu = new courseWuModels.CourseWu({
//         name : name,
//         title : title,
//         videoLink : videoLink,
//         downPdfLink : downPdfLink,
//         downVideoLink : downVideoLink
//     })
//     // 保存数据courseWu数据进mongoDB
//     console.log("保存数据courseWu数据进mongoDB")
//     newCourseWu.save((err,data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// })

module.exports = courseWu;





