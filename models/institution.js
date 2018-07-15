'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InstitutionSchema = Schema({
	name: String,
	uri: String,
	uid: String,
	acronym: String,
    email: String,
    pubDescription: String,
    websiteUrl: String
})

module.exports = mongoose.model('Institution', InstitutionSchema)