import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Increment from "./components/increment";
function App() {
  const [hello, setHello] = useState("dark");
  console.log("parent reinstantiated");
  useEffect(() => {
    console.log("parent rerendered");
  });
  return (
    <>
      {hello} <Increment hello={hello} setHello={setHello} />
    </>
  );
}

export default App;
