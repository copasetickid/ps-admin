'use strict';

var React = require('react'),
	AuthorApi = require('../../api/AuthorApi');

var Authors = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Authors</h1>
			</div>
		);
	}
});

module.exports = Authors;