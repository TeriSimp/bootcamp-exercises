import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const {value, name} = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    });
  }

  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={fullName.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={lastName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
