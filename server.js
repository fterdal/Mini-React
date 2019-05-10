const express = require('express')
const morgan = require('morgan')
const { random, floor } = Math
const app = express()

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/api/counter', (req, res, next) => {
  res.json({
    counter: floor(random() * 100),
  })
})

const cookies = [
  {
    id: 1,
    name: 'chocolate chip'
  },
  {
    id: 2,
    name: 'oatmeal raisin'
  },
]

app.get('/api/cookies', (req, res, next) => {
  res.json(cookies)
})

app.post('/api/cookies', (req, res, next) => {
  const newCookie = req.body
  let nextId = -1
  cookies.forEach(existingCookie => {
    if (existingCookie.id >= nextId) {
      nextId = existingCookie.id + 1
    }
  })
  cookies.push({
    id: nextId,
    name: newCookie.name
  })
  res.status(201)
  res.json(newCookie)
})

const PORT = 8080
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
