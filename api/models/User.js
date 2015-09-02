var mongoose = require('mongoose'),
	schema = mongoose.Schema({
		firstName: String,
		lastName: String,
		email: String,
		groupId: {
	        type: mongoose.Schema.Types.ObjectId,
	        ref: 'Group'
	    }
	});

module.exports = mongoose.model('User', schema);
