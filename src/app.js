const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const { checkOverload } = require('./helpers/check.connect');

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//init db
require('./dbs/init.mongodb');
// checkOverload();

//init router
app.use('/', require('./routers'));
//handle error


module.exports = app;