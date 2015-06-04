var React = require("react");
var Store = require("../stores/Store");
var AnotherComponent = require("./AnotherComponent");

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
				<AnotherComponent data={this.state.data} />
			</div>
		);
	}
});

module.exports = MainApp;