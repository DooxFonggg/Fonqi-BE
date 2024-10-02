'use strict'

const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.host_db).then(_ => console.log('Connected MongoDB Successfull')).catch(err => console.log('Error connect!'));

//dev
if (1 == 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true })
}

module.exports = mongoose;

//nếu kết nối kiểu này mà chuyển sang java hay php rất khó khăn
//bởi vì nếu khai báo kiểu này sẽ có nhiều kết nối đến db => không tối ưu cho các ngôn ngữ khác nếu muốn chuyển qua
//cách viết tối ưu dùng singleton một trong những design parten
//singleton thường dùng hay gọi 1 lần với phương thức get instanse
