const mongoose = require('mongoose');
/************** 定义模式视频课程Schema **************/
const courseWuSchema = mongoose.Schema({
    name : String,  // 点击的导航按钮
    title : String, // 视频的title
    videoLink : String,  // 视频的bilibili链接
    recordContent : String  // markdown内容  作为展示记录
});

/************** 定义模型Model **************/
const Models = {
    CourseEveryday : mongoose.model('CourseEveryday', courseWuSchema)
}

module.exports = Models;
