import { useState } from "react";
import "./App.css";
import Counter from "./Component/Counter";

function App() {
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <Counter
      count={count}
      increment={incrementCounter}
      decrement={decrementCounter}
    />
  );
}

export default App;
