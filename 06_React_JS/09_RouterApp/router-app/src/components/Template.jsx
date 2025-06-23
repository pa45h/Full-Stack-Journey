import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Template({
  title,
  description1,
  description2,
  image,
  formType,
  setIsLoggedIn,
}) {
  return (
    <div className="w-11/12 mx-auto max-w-[1080px] flex justify-evenly items-center py-2 gap-3">
      <div className="flex flex-col gap-3 max-w-[400px] p-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="flex flex-col">
          <span className="text-gray-400">{description1}</span>
          <span className="italic text-cyan-200">{description2}</span>
        </p>

        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex justify-center items-center gap-2">
          <div className="w-[170px] h-[1px] bg-gray-600"></div>
          <p className="text-gray-600 text-sm">OR</p>
          <div className="w-[170px] h-[1px] bg-gray-600"></div>
        </div>

        <button className="border p-2 rounded-xl cursor-pointer flex justify-center items-center gap-2 text-gray-400">
          <FcGoogle className="w-[22px] h-[22px]" />
          Sign In With Google
        </button>
      </div>

      <div>
        <img src={image} className="rounded-2xl shadow-2xl" width={350} height={350} />
      </div>
    </div>
  );
}

export default Template;
