"# ati2-fase2" 

1. Crear el Usuario en MongoDB

	db.createUser({
		user : "ati",
		pwd : "12345",
		roles : ["readWrite","dbAdmin"]
	});

2. Iniciar Mongo

3. Iniciar la aplicación

	Dentro del directorio ati-fase2 ejecutar:
	npm start