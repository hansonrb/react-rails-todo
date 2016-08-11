import React, { PropTypes } from 'react';
import _ from 'lodash';

export default class TodoForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
    	item: ''
    }
  }

  handleSubmit = (e) => {
	e.preventDefault();
	this.props.onFormSubmit(this.state.item);
	this.setState({item: ''});
	this.refs.item.focus();
	return;
  }

  onChange = (e) => {
	this.setState({
		item: e.target.value
	});
  }

  render() {
    return (
		<form onSubmit={this.handleSubmit}>
			<input type='text' ref='item' onChange={this.onChange} value={this.state.item} />
			<input type='submit' value='add' />
		</form>
	);
  }
}
