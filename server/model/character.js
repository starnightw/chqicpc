const mongoose = require('mongoose');
/************* 定义模式  人物志内容*********/
const characterSchema = mongoose.Schema({
    class: String, // 分类
    nameTitle : String,  // 名称 例如： 17-3 王灿
    imgUrl : String,  // img 路径
    recordContent : String  // markdown内容  作为展示记录
});

/*********** 定义模型Model ********/
const Models = {
    Character : mongoose.model('Character', characterSchema)
}

module.exports = Models;
