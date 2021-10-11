import { useContext, useEffect } from "react";
import { useUser } from "../context/logged-context";

const User = () => {
  const [loggedIn, setLoggedIn] = useUser();
  console.log("reinstantiated context user");
  useEffect(() => {
    console.log("rerendered context user");
  });
  return (
    <div>
      {String(loggedIn)}
      <button onClick={() => setLoggedIn(!loggedIn)}>log out Context</button>
    </div>
  );
};

export default User;
