import React, { Component } from "react";
import tasklist from "../../src/tasklist.svg";
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary tex-white">
                <img
                  src={tasklist}
                  style={{ width: "20px", height: "30px" }}
                  alt="tasklist img"
                />
              </div>
            </div>
            <input
              type="text"
              name=""
              id=""
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            style={{ width: "100%" }}
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn btn-block btn-success mt-3 text-uppercase"
                : "btn btn-block btn-primary mt-3 text-uppercase"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
