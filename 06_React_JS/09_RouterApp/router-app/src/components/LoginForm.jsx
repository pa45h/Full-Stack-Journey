import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In!");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <label>
        <p className="text-sm mb-1">
          Email Address<sup className="text-red-800 m-1">*</sup>
        </p>
        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </label>
      <label className="relative">
        <p className="text-sm mb-1">
          Password<sup className="text-red-800 m-1">*</sup>
        </p>
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <span
          className="absolute bottom-7 right-3"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="w-[19px] h-[19px]" />
          ) : (
            <AiOutlineEye className="w-[19px] h-[19px]" />
          )}
        </span>

        <Link to="#">
          <p className="text-end text-cyan-600 text-xs">Forgot Password</p>
        </Link>
      </label>
      <button class="w-full relative inline-flex items-center justify-center p-0.5 mt-8 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 cursor-pointer">
        <span class=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Sign In
        </span>
      </button>
    </form>
  );
};

export default LoginForm;
