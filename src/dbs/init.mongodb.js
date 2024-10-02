'use strict'

const mongoose = require('mongoose');
const config = require('../config');
const { countConnect } = require('../helpers/check.connect');

//áp dụng singleton parten
//connect được nhiều db khác nhau sql, nosql

class Database {

    constructor() {
        this.connect();
    }

    //connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(config.host_db, {
            //xét tùy theo dung lượng bộ nhớ server chịu tải
            maxPoolSize: 50
        }).then(_ => console.log('Connected MongoDB Successfull', countConnect())).catch(err => console.log('Error connect!'));
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

}

const instanseMongodb = Database.getInstance();

module.exports = instanseMongodb;

