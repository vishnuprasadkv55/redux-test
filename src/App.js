import React, { useEffect, useLayoutEffect, useState } from "react";
import Increment from "./components/increment";
import User from "./components/user";
function App() {
  const [hello, setHello] = useState("dark");
  console.log("parent reinstantiated");
  useEffect(() => {
    console.log("parent rerendered");
  });
  useLayoutEffect(()=>{
    console.log("in the layout")
  })
  return (
    <>
      {hello} <Increment hello={hello} setHello={setHello} />
      <User/>
    </>
  );
}

export default App;
