var server = require("./api/server.js").Server;

server.start(function (err) {
	if (err) {
		console.error(err);
		return process.exit(1);
	}
	console.log("Server running at " + server.info.uri);
});