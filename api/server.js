var Hapi = require('hapi'),
	server = new Hapi.Server(),
	Path = require('path');
	// index = Path.resolve(__dirname + '/../public/index.html');

server.connection({
	host: '0.0.0.0',
	port: process.env.PORT || 8080, //process.env.PORT for heroku
});

server.route([

	{	//Make public folder default path?
    	path: "/{param*}",
    	method: "GET",
    	handler: {
    		directory:{
    			path: Path.resolve(__dirname + '/../public'),
    			index: true
    		}
    	}
    },

	{	//Default route opens index.html
		method: 'GET',
		path: '/',
		config: {
			handler: function(request, reply){
				reply.file("public/index.html");
			}
		}
	}

]);

module.exports = {
	Server: server
};