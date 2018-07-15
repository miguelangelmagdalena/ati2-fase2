# Proyecto_ati2_fase2

## 1. Crear el Usuario en MongoDB

	db.createUser({
		user : "ati",
		pwd : "12345",
		roles : ["readWrite","dbAdmin"]
	});

## 2. Iniciar Mongo

## 3. Importar Json a Mongo

En windows en mi caso, desde el directorio donde tenemos mongo C:\Program Files\MongoDB\Server\4.0\bin ubicando la ruta de nuestro archivo db_institutions.json, importamos con el siguiente comando: 
	
	mongoimport --db institution --collection institutions --file "C:\ati-fase2\db_institutions.json" --jsonArray

Y podemos comprobar el import con:
	
	use institution
	db.institutions.find().pretty()

## 4. Iniciar la aplicación

Dentro del directorio ati-fase2 ejecutar:
	
	npm start

### 4.1 Rutas de nuestra API REST

GET - Listar todas las instituciones
		http://localhost:3000/institution
POST - Agregar institución
		http://localhost:3000/institution
GET, PUT, DELELETE - Por el campo _id
		http://localhost:3000/institution/:id

#### Otros
GET - Buscar por id y compara con el determinado campo
		http://localhost:3000/institution/name/:id
		http://localhost:3000/institution/uri/:id
		http://localhost:3000/institution/uid/:id
		http://localhost:3000/institution/acronym/:id
		http://localhost:3000/institution/email/:id
		http://localhost:3000/institution/pubDescription/:id
		http://localhost:3000/institution/websiteUrl/:id
