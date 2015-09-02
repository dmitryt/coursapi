'use strict';
function init(server) {
	var users = require('./api/controllers/users');
	server.get('/users', users.find);
	server.get('/users/:id', users.get);
	server.post('/users', users.create);
	server.put('/users/:id', users.update);
	server.del('/users/:id', users.remove);
}

exports.init = init
