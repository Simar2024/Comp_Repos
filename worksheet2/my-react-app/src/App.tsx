import React, { useState } from "react";
import "./App.css";

function App() {
  // Declare a new state variable called 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {/* Remove the logo and replace it with a counter example */}
        <h1>Counter</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
}

export default App;
