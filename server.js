const api = require('./api')

const PORT = 3000
api.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
