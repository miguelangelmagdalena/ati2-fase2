'use strict'

const Institution = require('../models/institution')

// Check Si un elemento esta vacio
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

function getInstitutions (req, res) {
	Institution.find({}, (err, inst) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!inst) {
			return res.status(404).send({ message: `No existen instituciones`})
		}
		res.status(200).send({ institution: inst})
	})
}

function addInstitution (req, res){
	console.log('POST /institution')
	console.log(req.body)

	let institution = new Institution()
	if(isEmptyObject(req.body.name)) req.body.name = 'Sin información'
	if(isEmptyObject(req.body.uri)) req.body.uri = 'Sin información'
	if(isEmptyObject(req.body.uid)) req.body.uid = 'Sin información'
	if(isEmptyObject(req.body.acronym)) req.body.acronym = 'Sin información'
	if(isEmptyObject(req.body.email)) req.body.email = 'Sin información'
	if(isEmptyObject(req.body.pubDescription)) req.body.pubDescription = 'Sin información'
	if(isEmptyObject(req.body.websiteUrl)) req.body.websiteUrl = 'Sin información'
    
	institution.name = req.body.name
    institution.uri = req.body.uri
    institution.uid = req.body.uid
    institution.acronym = req.body.acronym
    institution.email = req.body.email
    institution.pubDescription = req.body.pubDescription
    institution.websiteUrl = req.body.websiteUrl

	institution.save((err, institutionStored) =>{
		if(err) {
			res.status(500).send({ message: `Error al guardar en la base de datos ${err}`})
		}
		res.status(200).send({ institution: institutionStored})
	})

}

function getInstitution (req, res) {
	let id = req.params.id
	Institution.findById(id, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})

}


function updateInstitution (req, res) {
	let id = req.params.id
	let update = req.body

	Institution.findByIdAndUpdate(id, update, (err, institutoActualizado) => {
		if(err) {
			return res.status(500).send({ message: `Error al actualizar la institución ${err}`})
		}
		if(!institutoActualizado) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ message: 'La institución ha sido actualizada'})
	})
}

function deleteInstitution (req, res) {
	let id = req.params.id
	Institution.findById(id, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al borrar la institución ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		instituto.remove( err =>{
			if(err) {
				return res.status(500).send({ message: `Error al borrar la institución ${err}`})
			}
			res.status(200).send({ message: 'La institución ha sido eliminada'})
		})

		
	})
}

/******
	Otros endpoints para filtrar
*******/
function getInstitutionByName (req, res) {
	let id = req.params.id
	Institution.find( {'name' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByUri (req, res) {
	let id = req.params.id
	Institution.find( {'uri' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByUid (req, res) {
	let id = req.params.id
	Institution.find( {'uid' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByAcronym (req, res) {
	let id = req.params.id
	Institution.find( {'acronym' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByEmail (req, res) {
	let id = req.params.id
	Institution.find( {'email' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByPubDescription (req, res) {
	let id = req.params.id
	Institution.find( {'pubDescription' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
function getInstitutionByWebsiteURL (req, res) {
	let id = req.params.id
	Institution.find( {'websiteUrl' : id}, (err, instituto) => {
		if(err) {
			return res.status(500).send({ message: `Error al realizar la petición ${err}`})
		}
		if(!instituto) {
			return res.status(404).send({ message: `La institución no existe`})
		}
		res.status(200).send({ institution: instituto})
	})
}
module.exports = {
	getInstitutions,
	addInstitution,
	getInstitution,
	updateInstitution,
	deleteInstitution,
	getInstitutionByName,
	getInstitutionByUri,
	getInstitutionByUid,
	getInstitutionByAcronym,
	getInstitutionByEmail,
	getInstitutionByPubDescription,
	getInstitutionByWebsiteURL
}