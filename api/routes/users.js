'use strict';
var namespace = require('restify-namespace'),
	users = require('../controllers/users');

function init(server) {
	namespace(server, '/users', function(){
		server.get('/', users.find);
		server.post('/', users.create);
		namespace(server, '/:id', function(){
			server.get('/', users.get);
			server.put('/', users.update);
			server.del('/', users.remove);
		});
	});
}

exports.init = init
