// https://github.com/expressjs/csurf#example

const path = require('path');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

// setup route middlewares
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });
const express = require('express');

// create express app
const app = express();

// parse cookies
// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());

app.use(
  '/app/',
  csrfProtection,
  (req, res, next) => {
    res.cookie('csrfToken', req.csrfToken(), { path: '/' });
    next();
  },
  express.static(path.join(__dirname, 'public'))
);

app.listen(3200, () => {
  console.log('监听3200...');
});
