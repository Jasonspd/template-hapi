var Constants = require("../constants/Constants");
var Dispatcher = require("../dispatcher/Dispatcher");

var ActionTypes = FruitConstants.ActionTypes;

module.exports = {

	example: function(info) {
		Dispatcher.dispatch({
			type: ActionTypes.EXAMPLE,
			contents: something
		});
	};

};