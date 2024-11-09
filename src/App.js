import logo from "./logo.svg";
import "./App.css";
import Greetings from "./components/Greetings";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1> Hello React, This is my base app</h1>
      <p> Recap the react first</p>
      <Greetings name="Hiruni" />

      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <input
        type="text"
        placeholder="Type your content"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed {text}</p>
    </div>
  );
}

export default App;
