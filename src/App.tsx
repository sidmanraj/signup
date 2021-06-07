import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {logIn, signOut, signup} from "./auth";
import { UserContext } from "./Profile";

function App() {
  const [message, setMessage]  = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);

  return (
    <>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value) } />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value) }/>
      <button onClick={() => signup(email, password).then(x => {
        setMessage(x)
      })}>sign up</button>
      <button onClick={() => logIn(email, password).then(x => setMessage(x))}>login</button>
      <button onClick={() => signOut().then(x => setMessage(x))}>sign out</button>
      <div>{message}</div>
      {user && <div>{user.email}</div>}
    </>
  );
}

export default App;
