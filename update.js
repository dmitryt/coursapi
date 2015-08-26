var dbName = "db_coursapi",
	user = {
		user: "db_coursapi_user",
		pwd: "1",
		roles: [
			{role: "readWrite", db: dbName}
		]
	},
	db = connect(["localhost", dbName].join("/"));

db.createUser(user);