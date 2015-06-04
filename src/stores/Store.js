var Dispatcher 		= require("../dispatcher/Dispatcher");
var EventEmitter 	= require("events").EventEmitter;
var Constants 		= require("../constants/Constants");
var ActionTypes 	= Constants.ActionTypes;
var Assign 			= require("object-assign");

var CHANGE_EVENT = "change";

var _data = { name: "Jason", age: 23};

var Store = Assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getData: function() {
		return _data;
	}
});

Dispatcher.register(function(action) {

	switch(action.type) {

	}
});

module.exports = Store;