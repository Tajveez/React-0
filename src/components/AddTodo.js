import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({
        title: "",
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add a new Todo"
          style={{ flex: "10", padding: "10px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{
            flex: "1",
          }}
        />
      </form>
    );
  }
}

export default AddTodo;