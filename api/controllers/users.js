var JSONStream = require('JSONStream'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	rest = require('../utils').rest(User);

['find', 'get', 'create', 'update', 'remove'].forEach(function(key){
	exports[key] = rest[key];
});
