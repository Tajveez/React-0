import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyles = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: "#f4f4f4",
      fontSize: "16px",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      marginRight: "2px",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <p style={this.getStyles()}>
          {" "}
          <input
            style={{ marginRight: "5px" }}
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button
            style={DeleteButtonStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
const DeleteButtonStyle = {
  //   display: this.props.todo.completed ? "block" : "none",
  background: "red",
  borderRadius: "50%",
  color: "white",
  float: "right",
  cursor: "pointer",
  border: "none",
  padding: "5px 10px",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoItem;
