var mongoose = require('mongoose');

exports.connect = function(dbConfig) {
	var parseConnection = function(dbConfig, secure) {
			return "mongodb://%u:%p@%h/%d"
				.replace('%u', dbConfig.user)
				.replace('%p', secure ? "xxx" : dbConfig.password)
				.replace('%h', dbConfig.host)
				.replace('%d', dbConfig.name);
		},
		db = mongoose.connection;
	mongoose.connect(parseConnection(dbConfig));

	db.on('error',function(err) {
	    console.error('[DB]: database error', err);
	});

	db.on('once',function() {
	    console.log('[DB]: database connected under ', parseConnection(dbConfig, true));
	});
};