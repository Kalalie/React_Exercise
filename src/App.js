import React, { useState } from 'react';
import './App.css';

function App() {
  // variables
  const [count, setCount] = useState(0);
  // methods

  const add = () =>{ setCount(count +1);
  };
  const minus = () =>{ setCount(count -1);
  };

  // template
  return(
    <div class="App">
      <h1> Counter</h1>
      <button onClick={add} > Increase </button>
      <span> {count} </span>
      <button onClick={minus}> Decrease </button>

    </div>
  );
}
export default App;
