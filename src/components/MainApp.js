var React = require("react");
var Store = require("../stores/Store");

function getStateFromStore() {
	return {
		data: Store.getData()
	};
};

var MainApp = React.createClass({

	getInitialState: function() {
		return getStateFromStore();
	},

	componentDidMount: function() {
		Store.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		Store.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState(getStateFromStore());
	},

	render: function() {
		console.log(this.state.data);
		return (
			<div className="app-wrapper">
				<h1>My name is {this.state.data.name}</h1>
				<h3>I am {this.state.data.age} years old</h3>
			</div>
		);
	}
});

module.exports = MainApp;