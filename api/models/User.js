var mongoose = require('mongoose'),
	schema = mongoose.Schema({
		firstname: String,
		lastname: String,
		email: String,
		group: {
	        type: mongoose.Schema.Types.ObjectId,
	        ref: 'Group'
	    }
	});

module.exports = mongoose.model('User', schema);
