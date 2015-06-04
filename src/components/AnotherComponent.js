var React = require("react");

var AnotherComponent = React.createClass({

	render: function() {
		return(
			<div>
				<h1>My name is {this.props.data.name}</h1>
				<h3>I am {this.props.data.age} years old</h3>
			</div>
		);
	}

});

module.exports = AnotherComponent;