import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../actions";
import { useUser } from "../context/logged-context";

const User = () => {
  const [loggedIn, setLoggedIn] = useUser();
  console.log("reinstantiated user");
  useEffect(() => {
    console.log("rerendered user");
  });
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state)=> state.isLogged)
  return (
    <>
      <div>
        <h1>User Context</h1>
        {String(loggedIn)}
        <button onClick={() => setLoggedIn(!loggedIn)}>log out Context</button>
      </div>
      <div>
        <h1>User Redux</h1>
        {String(userLoggedIn)}
        <button onClick={() => dispatch(signIn())}>log out redux</button>
      </div>
    </>
  );
};

export default User;
