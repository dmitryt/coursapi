'use strict';
var ROUTES = ['users', 'groups'];

function init(server) {
	ROUTES.forEach(function(route){
        require('./' + route).init(server);
    });
}

exports.init = init
