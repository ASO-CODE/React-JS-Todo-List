import React, { Component } from "react";
import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
// controlled uncontrolled inputs
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value;
// React
// value, onChange
export default class App extends Component {
  render() {
    return (
      <>
        <p>234</p>
        <div>
          <div className="container">
            <div className="row">
              <TodoInput />
              <TodoList/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
