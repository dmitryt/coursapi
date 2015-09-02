'use strict';
var restify = require('restify'),
	path = require('path'),
	fs = require('fs'),
	Logger = require('bunyan'),
	db = require('./db'),
	routes = require('./routes'),

	cfgName = {
		'production': 'production.json'
	}[process.env.NODE_ENV] || 'development.json',
	config = require(path.join(__dirname, 'config', cfgName)),
	appName = 'coursapi',
	server = restify.createServer({
		name: appName,
		log: new Logger.createLogger({
	        name: appName,
	        streams: [{
	        	level: 'info',
	        	stream: process.stdout
	        }],
	        serializers: {
	            req: Logger.stdSerializers.req
	        }
	    })
	}),
	dbConnect = db.connect(config['database']),
	setJsonHeader = function(req, res, next) {
		res.setHeader('content-type', 'application/json; charset=utf-8');
		next();
	},
	bootstrapModels = function() {
		var modelsPath = __dirname + "/api/models";
		fs.readdirSync(modelsPath).forEach(function(file){
			if (file.match(/\.js$/)) {
				require([modelsPath, file].join("/"));
			}
		});
	};

bootstrapModels();

server.listen(config.port, config.host, function () {
	console.log('%s listening at %s', server.name, server.url);
});

server.pre(function (req, res, next) {
    req.log.info({req: req}, 'REQUEST');
    next();
});

server
.use(setJsonHeader)
.use(restify.bodyParser())
.use(restify.fullResponse())
.use(restify.gzipResponse());

routes.init(server);
