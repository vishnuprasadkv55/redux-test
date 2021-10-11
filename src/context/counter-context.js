import { createContext, useContext, useState } from "react";


const CounterContext = createContext();

export const CounterProvider = (props) =>{
    const [state, setState] = useState(0);
    return <CounterContext.Provider value={[state, setState]} {...props}/>
}

export const useCounter = ()=>{
    const context = useContext(CounterContext)
    return context;
}