require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.listen(process.env.PORT || 3000)