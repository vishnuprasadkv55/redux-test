import { useEffect } from "react";

const Child =()=>{

    console.log('reinstantiated real child');
    useEffect(()=>{
        console.log('rerendered real child');
    })
    return "This is a child"
}

export default Child