const express = require('express')
const volleyball = require('volleyball')
const app = express()

// app.use(volleyball)

app.get('/hello', (req, res, next) => {
  res.send('hello')
})

module.exports = app
