import React from "react";
import ReactDOM from "react-dom";

const fName = "Sigma";
const lName = "male";
const randomNumb = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {randomNumb}</p>
  </div>,
  document.getElementById("root")
);
