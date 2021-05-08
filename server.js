const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)

app.use(express.json())
const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)