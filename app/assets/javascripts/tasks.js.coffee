# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

@Tasks = React.createClass
	render: ->
		React.DOM.div
			className: 'tasks'
			React.DOM.h2
				className: 'title'
				'Tasks'