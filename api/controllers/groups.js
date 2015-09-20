var JSONStream = require('JSONStream'),
	mongoose = require('mongoose'),
	Group = require('../models/group'),
	rest = require('../utils').rest(Group);

['find', 'get', 'create', 'update', 'remove'].forEach(function(key){
	exports[key] = rest[key];
});
