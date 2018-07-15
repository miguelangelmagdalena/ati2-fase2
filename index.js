'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

const port = process.env.PORT || 3000

mongoose.connect(config.db, (err, res) =>{
	if(err) { 
		return console.log(`Error al conectar a la base de datos: ${err}`)
	}
	console.log('Conexión con mongoDB establecida')
	
	app.listen(config.port, () =>{
		console.log(`Proyecto Ati fase 2 corriendo en http://localhost:${config.port}`)
	})
})

