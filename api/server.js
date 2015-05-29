var Hapi = require('hapi'),
	server = new Hapi.Server(),
	Path = require('path');
	index = Path.resolve(__dirname + '/../public/index.html');

server.connection({
	host: '0.0.0.0',
	port: process.env.PORT || 8080,
});

server.route([

	{
    	path: "/public/{param*}",
    	method: "GET",
    	handler: {
    		directory:{
    			path: Path.resolve(__dirname + '/../public'),
    			index: true
    		}
    	}
    },

	{
		method: 'GET',
		path: '/',
		config: {
			handler: function(request, reply){
				reply.file(index);
			}
		}
	}

]);

module.exports = {
	Server: server
};