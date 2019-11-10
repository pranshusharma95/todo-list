import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit, handleDone } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2"   style={{backgroundColor: this.props.backgroundColor}}>
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-primary" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
          <span className="mx-2 text-success">
          <input type="checkbox"
            checked={this.props.marked}
            onChange={handleDone}
          />
          </span>
        </div>
      </li>
    );
  }
}
