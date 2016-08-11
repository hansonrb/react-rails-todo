import React, { PropTypes } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import _ from 'lodash';
import 'whatwg-fetch';

export default class Todo extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);
    this.state = { items: props.items };
  };

  addItem = (newItem) => {
    if ( newItem.length == 0 ) return;
    const self = this
    const newItemObject = {name: newItem, is_active: true}

    fetch('/tasks', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newItemObject)
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      var allItems = self.state.items.concat(json);
      self.setState({ items: allItems });
    })
  };

  deleteItem = (id) => {
    const self = this
    fetch('/tasks/' + id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let remaining = _.remove(self.state.items, function(obj) { 
        return id != obj.id;
      });

      self.setState({ items: remaining });
    });
  };

  completeItem = (id) => {
    const self = this
    fetch('/tasks/' + id + "/done", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      for ( var p in self.state.items ) {
        if ( json.id == self.state.items[p].id )
          self.state.items[p].is_active = false;
      }

      self.setState({ items: self.state.items });
    });
  };

  render() {
    return (
      <div className="todoApp">
        <TodoList items={this.state.items} deleteItem={this.deleteItem} completeItem={this.completeItem} />
        <TodoForm onFormSubmit={this.addItem} />
      </div>
    );
  }
}
