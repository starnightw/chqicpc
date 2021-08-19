const mongoose = require('mongoose');
/************** 定义模式视频课程Schema **************/
const courseWuSchema = mongoose.Schema({
    name : String,  // 点击的导航按钮
    title : String, // 视频的title
    videoLink : String,  // 视频的bilibili链接
    downPdfLink : String,  // 课程PDF的下载url
    downVideoLink : String  // 课程视频的下载url
});

/************** 定义模型Model **************/
const Models = {
    CourseWu : mongoose.model('CourseWu', courseWuSchema)
}

module.exports = Models;
