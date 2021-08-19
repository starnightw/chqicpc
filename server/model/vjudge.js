const mongoose = require('mongoose');
/************* 定义模式  vjudge 题目合集*********/
const vJudgeSchema = mongoose.Schema({
    name : String,  // name设置
    recordContent : String  // markdown内容  作为展示记录
});

/*********** 定义模型Model ********/
const Models = {
    VJudge : mongoose.model('VJudge', vJudgeSchema)
}

module.exports = Models;
