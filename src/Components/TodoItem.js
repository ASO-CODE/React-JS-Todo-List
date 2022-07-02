import React, { Component } from "react";
import editIcon from "../../src/Edit.svg";
import deleteIcon from "../../src/trash.svg";
export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <img
              src={editIcon}
              style={{ width: "20px", height: "30px" }} onClick={handleEdit}
              alt=""
            />
          </span>
          <span className="mx-2 text-success">
            <img
              src={deleteIcon}
              style={{ width: "20px", height: "30px" }} onClick={handleDelete}
              alt=""
            />
          </span>
        </div>
      </li>
    );
  }
}
