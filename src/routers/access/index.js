'use strict'

const express = require('express');
const accessController = require('../../controllers/access.controller');
const router = express.Router();

//Đăng ký
router.post('/shop/signup', accessController.singUp);


module.exports = router;