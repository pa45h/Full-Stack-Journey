import React, { useState, useContext } from "react";
import UserContaxt from "../context/userContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContaxt);

  function submitHandler(e) {
    e.preventDefault();
    setUser({ userName, password });
  }
  return (
    <div>
      <h2>Log In</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={submitHandler}>Save</button>
    </div>
  );
};

export default Login;
