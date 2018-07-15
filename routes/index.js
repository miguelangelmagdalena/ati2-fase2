'use strict'

const express = require('express')
const InstitutionControllers = require('../controllers/Institution')

const api = express.Router()


//GET /institution 
//Listar todas las instituciones
api.get('/', InstitutionControllers.getInstitutions)
//POST /institution 
//Agregar institución
api.post('/', InstitutionControllers.addInstitution)
//GET /institution/:id
//Buscar institución por ID
api.get('/:id', InstitutionControllers.getInstitution)
//PUT /institution/:id
//Modificar institución por ID
api.put('/:id', InstitutionControllers.updateInstitution)
//DELELETE /institution/:id
//Borrar institución por ID
api.delete('/:id', InstitutionControllers.deleteInstitution)


// ##Otros endpoints para filtrar##
//GET /institution/name/:id
//Buscar todas las instituciones por name
api.get('/name/:id', InstitutionControllers.getInstitutionByName)
//GET /institution/uri/:id
//Buscar todas las instituciones por uri
api.get('/uri/:id', InstitutionControllers.getInstitutionByUri)
//GET /institution/uid/:id
//Buscar todas las instituciones por uid
api.get('/uid/:id', InstitutionControllers.getInstitutionByUid)
//GET /institution/acronym/:id
//Buscar todas las instituciones por acronym
api.get('/acronym/:id', InstitutionControllers.getInstitutionByAcronym)
//GET /institution/email/:id
//Buscar todas las instituciones por email
api.get('/email/:id', InstitutionControllers.getInstitutionByEmail)
//GET /institution/pubDescription/:id
//Buscar todas las instituciones por pubDescription
api.get('/pubDescription/:id', InstitutionControllers.getInstitutionByPubDescription)
//GET /institution/websiteUrl/:id
//Buscar todas las instituciones por websiteUrl
api.get('/websiteUrl/:id', InstitutionControllers.getInstitutionByWebsiteURL)

module.exports = api