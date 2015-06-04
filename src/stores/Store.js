var Dispatcher 		= require("../dispatcher/Dispatcher");
var EventEmitter 	= require("events").EventEmitter;
var Constants 		= require("../constants/Constants");
var ActionTypes 	= Constants.ActionTypes;
var Assign 			= require("object-assign");

var CHANGE_EVENT = "change";

var Store = Assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeLister: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

Dispatcher.register(function(action) {

	switch(action.type) {

	}
});

module.exports = Store;