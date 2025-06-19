import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: "line-through"}}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
