'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST_DB
    // HOST,
    // HOST_URL
} = process.env;


assert(PORT, 'PORT is required');
assert(HOST_DB, 'HOST is required');


module.exports = {
    port: PORT,
    host_db: HOST_DB
    // host: HOST,
    // url: HOST_URL,
};