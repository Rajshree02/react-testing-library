import logo from "./logo.svg";
import "./App.css";

import React, { useDebugValue, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <div className="App">
      <label for="name">Enter your name</label> <br /> <br />
      <input
        id="name"
        type="text"
        required
        onChange={(e) => {
          setName(e.target.value);
          setDisplay(false);
        }}
      ></input>
      <br /> <br />
      <button
        id="button"
        type="button"
        disabled={!name}
        onClick={() => {
          setDisplay(true);
        }}
      >
        Greet
      </button>
      {display && <p>Hello {name} !!</p>}
    </div>
  );
}

export default App;
