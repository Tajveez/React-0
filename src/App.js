import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

import { v4 as uuid } from "uuid";

import Header from "./components/layout/Header";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Read a book",
        completed: false,
      },
      {
        id: uuid(),
        title: "Write some code",
        completed: false,
      },
      {
        id: uuid(),
        title: "Make tea",
        completed: false,
      },
    ],
  };
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    // console.log();
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
