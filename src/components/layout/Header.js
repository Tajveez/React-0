import React from "react";
import { Link } from "react-router-dom";
const headerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
};
const linkStyle = {
  color: "white",
};
export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}
