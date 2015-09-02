var mongoose = require('mongoose'),
	schema = mongoose.Schema({
		name: String,
        students: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
	});

module.exports = mongoose.model('Group', schema);
