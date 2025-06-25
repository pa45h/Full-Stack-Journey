import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex justify-center items-center h-[550px] text-5xl">
      Greetings, {userId}!
    </div>
  );
};

export default User;
