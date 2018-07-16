'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*Configuracion para plantillas html*/
app.engine('hbs', hbs({
	defaultLayout: 'default',
	extname: 'hbs',
	layoutsDir: __dirname + '/views/layouts/'
}))
app.set('view engine', 'hbs')


app.use('/institution', api)


module.exports = app