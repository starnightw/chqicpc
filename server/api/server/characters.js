// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('../../model/character');
const express = require('express');
const character = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取现有的所有的人物志内容接口
character.get('/getCharactersList',(req,res) => {
    // 通过模型去查找数据库
    // console.log("账号接口/api/chara/getCharactersList --- 调用成功")
    models.Character.find((err,data) => {
        if (err) {
            res.send("账号接口/api/chara/getCharactersList"+err);
        } else {
            // console.log(data)
            res.send(data);
        }
    });
});

// 获取现有的某一类别的人物志内容接口
character.post('/getCharactersForClassList',(req,res) => {
    // 通过模型去查找数据库
    // console.log(req.body)
    // console.log("账号接口/api/chara/getCharactersList --- 调用成功")
    models.Character.find({ 'charaClass': req.body.charaClass},(err,data) => {
        if (err) {
            res.send("账号接口/api/chara/getCharactersList"+err);
        } else {
            // console.log(data)
            res.send(data);
        }
    });
});

// 添加一个人物志
// character.post('/addCharacters', (req, res) => {
//     let charaClass = '老师'
//     let nameTitle = 'oj组--王灿'
//     let imgUrl = 'https://img.zcool.cn/community/019a0959ef21a5a801216a4ba183c5.jpg@1280w_1l_2o_100sh.jpg'
//     let recordContent = '- 主题 学校\n' +
//         '- 时间胶囊 -->  私人 特定时间  特定地点去打开   公共、特定地点 被他人挖取到（发布需要审核）\n' +
//         '  - 声音、 图片、文字\n' +
//         '- 留言板： 规定相应建筑物的位置 通过二维码或AR识别扫出  \n' +
//         '- AR  扫路牌出特定动画 扫录取通知书/校徽出动画特效\n' +
//         '- 校园导览   导航+VR （建筑物建模）\n' +
//         '- 预报到---> 手机号\n' +
//         '- 新生指南--> 官方 非官方 内容 分类 搜索  便于新生顺利入学。\n' +
//         '\n'
//     let newCharater = new models.Character({
//         charaClass: charaClass ,
//         nameTitle : nameTitle,
//         imgUrl : imgUrl,
//         recordContent : recordContent
//     })
//     // 保存数据newUsername数据进mongoDB
//     console.log("保存数据newCharater数据进mongoDB")
//     newCharater.save((err,data) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(data);
//         }
//     });
// })

module.exports = character;


