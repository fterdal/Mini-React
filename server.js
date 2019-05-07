const express = require('express')
const morgan = require('morgan')
const { random, floor } = Math
const app = express()

app.use(morgan('dev'))

app.use(express.static('public'))

app.get('/api/counter', (req, res, next) => {
  res.json({
    counter: floor(random() * 100),
  })
})

const PORT = 8080
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
