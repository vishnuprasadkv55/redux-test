import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions";
import { useCounter } from "../context/counter-context";
import { useUser } from "../context/logged-context";
import Child from "./child";
const Increment = ({ setHello, hello }) => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const [user] = useUser()
  const [count, setCount] = useCounter();
  console.log("child reinstantiated");
  useEffect(() => {
    console.log("child rerendered");
  });
  return (
    <div className="Hello">
      <div>
        <h1>Redux Counter {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div style={{position: "fixed", right: '25%'}} >
        {(isLogged || user) && <h3>Valuable information I shouldn't see</h3>}</div>
      </div>
      <div>
        <h1>Context Provider Counter {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      
      <button onClick={() => setHello("dark changed" + Math.random())}>
          change parent from child
        </button>
        <Child/>
    </div>
  );
};

export default Increment;
