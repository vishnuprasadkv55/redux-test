import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions";
import { useCounter } from "../context/counter-context";
const Increment = ({ setHello, hello }) => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [count, setCount] = useCounter();
  console.log(hello + "child reinstantiated");
  useEffect(() => {
    console.log("child rerendered");
  });
  return (
    <div className="Hello">
      <div>
        <h1>Redux Counter {counter}</h1>
        <button onClick={() => setHello("dark changed" + Math.random())}>
          change parent from child
        </button>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged && <h3>Valuable information I shouldn't see</h3>}
      </div>
      <div>
        <h1>Context Provider Counter {count}</h1>
        <button onClick={() => setHello("dark changed" + Math.random())}>
          change parent from child
        </button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        {isLogged && <h3>Valuable information I shouldn't see</h3>}
      </div>
    </div>
  );
};

export default Increment;
