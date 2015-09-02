var JSONStream = require('JSONStream'),
    restify = require('restify');

function rest(model) {
    return {
        find: function(req, res, next) {
            model.find().stream().pipe(JSONStream.stringify()).pipe(res);
        },

        get: function(req, res, next) {
        	model.findById(req.params.id, function(err, instance) {
        		next.ifError(err);
        		if (!instance) {
        			return next(new restify.NotFoundError("Item not found"));
        		}
        		res.send(instance);
            });
        },

        create: function(req, res, next) {
        	var instance = new model(req.params);
        	instance.save(function(err, data){
        		next.ifError(err);
        		res.send(201, data);
        	});
        },

        update: function(req, res, next) {
        	var data = req.params;
        	model.findByIdAndUpdate(data.id, data, function(err, instance){
        		next.ifError(err);
        		res.send(instance);
        	});
        },

        remove: function(req, res, next) {
        	model.findByIdAndRemove(req.params.id, function(err, instance){
        		next.ifError(err);
        		res.send(204);
        	});
        }
    };
}

exports.rest = rest;
