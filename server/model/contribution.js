/** 贡献者**/
const mongoose = require('mongoose');
/************* 定义模式  贡献内容*********/
const contributionSchema = mongoose.Schema({
    recordContent : String  // markdown内容  作为展示记录
});

/*********** 定义模型Model ********/
const Models = {
    Contribution : mongoose.model('Contribution', contributionSchema)
}

module.exports = Models;
