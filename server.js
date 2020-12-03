const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,
                 {useNewUrlParser: true, useUnifiedTopology: true});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(process.env.PORT || 3000);

