const express = require("express")
const app = express()

const quizzesServer = require("./services/quizzes.service.server");
const questionsServer = require("./services/questions.service.server")

app.listen(8000)
