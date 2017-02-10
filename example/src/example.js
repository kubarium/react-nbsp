var React = require('react');
var ReactDOM = require('react-dom');
var ReactNbsp = require('react-nbsp');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactNbsp />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
