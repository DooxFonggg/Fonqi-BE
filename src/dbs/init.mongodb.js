'use strict'

const mongoose = require('mongoose');
const config = require('../config');
const { countConnect } = require('../helpers/check.connect');
const { db: { name, pass } } = require('../configs/config.mongodb');
const uri = `mongodb+srv://${name}:${pass}@cluster0.9jjac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


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

        mongoose.connect(uri, {
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

