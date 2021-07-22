const express = require('express')
const app = express()

require('dotenv').config()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('not ok')
})

app.get('/version', (req, res) => {
  res.send('5')
})


app.listen(PORT)