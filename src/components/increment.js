import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions';
const Increment = ({setHello, hello})=>{
    const counter = useSelector(state=> state.counter)
    const isLogged = useSelector(state=> state.isLogged)
    const dispatch = useDispatch();
    console.log(hello + 'child reinstantiated')
    useEffect(()=>{
        console.log('child rerendered')
    })
    return (
      <div className="Hello">
        <h1>Counter {counter}</h1>
        <button onClick={()=> setHello('dark changed' + Math.random())} >change parent</button>
        <button onClick={()=> dispatch(increment(5))} >+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        {isLogged && <h3>Valuable information I shouldn't see</h3>}
      </div>
    );
}

export default Increment