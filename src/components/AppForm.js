import React, { Component } from "react";
import uuid from "./Uuid";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: "" };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  //setting input value to the text in state

  onChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  //pushing text item of the state to the items

  submitHandler = (e) => {
    e.preventDefault();

    const arrayItem = {
      text: this.state.text,
      id: uuid()
    };

    this.setState((state) => ({
      items: state.items.concat(arrayItem),
      text: ""
    }));
  };
  deleteItem = (key) => {
    let todos = this.state.items.filter((todo) => key !== todo.id);
    this.setState({
      items: todos
    });
  };

  render() {
    return (
      <>
        <h1>toDo App</h1>

        <form onSubmit={this.submitHandler}>
          <label>Type the task you want to do!</label>
          <input
            type="text"
            onChange={this.onChangeHandler}
            value={this.state.text}
          />
        </form>

        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                <p> {item.text}</p>
               
                <p className="delete-btn" onClick={() => this.deleteItem(item.id)}> X </p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;