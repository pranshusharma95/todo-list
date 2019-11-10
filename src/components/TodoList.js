import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, handleDone} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-end">task list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              handleDone={() => handleDone (item.id)}
              backgroundColor={item.backgroundColor}
              marked={item.marked}
            />
          );
        })}

      </ul>
    );
  }
}
