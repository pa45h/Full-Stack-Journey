import React, { useContext } from "react";
import UserContaxt from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContaxt);

  if (!user) return <h1>Please LogIn!</h1>;
  return <h1>Welcome, {user.userName}</h1>;
}

export default Profile;
