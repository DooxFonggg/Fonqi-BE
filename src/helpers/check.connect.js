

'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

//kiểm tra xem có bao nhiêu connect tới db
const countConnect = () => {
    const numConnection = mongoose.Collection.length;
    console.log(`Num of connection ${numConnection}`);
}

//thông báo khi server quá tải
//làm quen với khái niệm os và process: vid làm thế nào để tăng tốc độ req nodejs
const checkOverload = () => {

    //cứ 5s check 1 lần connect
    setInterval(() => {
        const numConnection = mongoose.Collection.length;
        const numCores = os.cpus().length; //số core cpu trong máy mình
        //bộ nhớ mà dự án sử dụng
        const memoryUsage = process.memoryUsage().rss;
        //giả sử số lượng max mà máy tính mình có thể chịu tải kết nối
        //nếu xét ở trên server
        const maxConnections = numCores * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);

        //nếu số lượng kết nối db > số lượng kết nối core chịu tải
        if (numConnection > maxConnections) {
            console.log(`Connection overload detected`);
        }
    }, _SECONDS);
}
module.exports = {
    countConnect, checkOverload
}
