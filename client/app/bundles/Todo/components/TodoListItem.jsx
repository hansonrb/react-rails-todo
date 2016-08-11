import React, { PropTypes } from 'react';

export default class TodoListItem extends React.Component {
  static propTypes = {
  	detail: PropTypes.object.isRequired,
  	deleteItem: PropTypes.func.isRequired,
  	completeItem: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
    	item: this.props.detail
    }
  }

  componentWillReceiveProps(props) {
  	this.setState({
  		item: props.detail
  	})
  }

  deleteItem = (e) => {
  	e.stopPropagation();
  	this.props.deleteItem( this.state.item.id )
  }

  completeItem =() => {
  	if ( this.state.item.is_active == false ) return;
  	this.props.completeItem( this.state.item.id )
  }

  render() {
  	const item = this.state.item
  	const itemClass = item.is_active ? '' : 'completed';
    return (
		<li onClick={this.completeItem}><span className={itemClass}>{item.name}</span><a href='javascript:;' onClick={this.deleteItem}>&times;</a></li>
	)
  }
}

