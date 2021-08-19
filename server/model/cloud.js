const mongoose = require('mongoose');
/************* 定义模式  人物志内容*********/
const cloudSchema = mongoose.Schema({
    recordContent : String  // markdown内容  作为展示记录
});

/*********** 定义模型Model ********/
const Models = {
    Cloud : mongoose.model('Cloud', cloudSchema)
}

module.exports = Models;
