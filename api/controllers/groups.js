var JSONStream = require('JSONStream'),
	mongoose = require('mongoose'),
	User = mongoose.model('Group'),
	rest = require('../utils').rest(Group);

['find', 'get', 'create', 'update', 'remove'].forEach(function(key){
	exports[key] = rest[key];
});
