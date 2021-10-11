import React, { useEffect, useState } from "react";
import Increment from "./components/increment";
function App() {
  const [hello, setHello] = useState("dark");
  console.log("reinstantiated");
  useEffect(() => {
    console.log("rerendered");
  });
  return (
    <>
      {hello} <Increment hello={hello} setHello={setHello} />
    </>
  );
}

export default App;
