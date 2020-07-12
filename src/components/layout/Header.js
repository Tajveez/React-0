import React from "react";
const headerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
};
export default function Header() {
  return (
    <div>
      <h1 style={headerStyle}>TodoList</h1>
    </div>
  );
}
