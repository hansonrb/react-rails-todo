import React, { PropTypes } from 'react';
import TodoListItem from '../components/TodoListItem';
import _ from 'lodash';

export default class TodoList extends React.Component {
  static propTypes = {
  	items: PropTypes.array.isRequired,
  	deleteItem: PropTypes.func.isRequired,
  	completeItem: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
  	const props = this.props;
  	var createItem = function(item, index) {
		return (
			<TodoListItem detail={item} key={index} deleteItem={props.deleteItem} completeItem={props.completeItem} ></TodoListItem>
		);
	};

	return (
		<ul>{props.items.map(createItem)}</ul>
	);
  }
}