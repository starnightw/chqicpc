const mongoose = require('mongoose');
/************** 定义模式UserSchema **************/
const userSchema = mongoose.Schema({
    username : String,
    password : String
});

/************** 定义模型Model **************/
const Models = {
    User : mongoose.model('User', userSchema)
}

module.exports = Models;
