const mongoose = require('mongoose');
/************** 定义模式  关于aboutSchema **************/
const aboutSchema = mongoose.Schema({
    about : String
});

/************** 定义模型Model **************/
const Models = {
    About : mongoose.model('About', aboutSchema)
}

module.exports = Models;
