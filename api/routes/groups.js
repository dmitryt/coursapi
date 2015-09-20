'use strict';
var namespace = require('restify-namespace'),
	groups = require('../controllers/groups');

function init(server) {
	namespace(server, '/groups', function(){
		server.get('/', groups.find);
		server.post('/', groups.create);
		namespace(server, '/:id', function(){
			server.get('/', groups.get);
			server.put('/', groups.update);
			server.del('/', groups.remove);
		});
	});
}

exports.init = init
