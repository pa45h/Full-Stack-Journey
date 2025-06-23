import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showCreatedPassword, setShowCreatedPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [activeBg, setActiveBg] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords Do Not Match!");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created!");
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="inline-flex rounded-md shadow-xs my-3">
        <button
          onClick={() => setActiveBg("student")}
          className={`px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white transition-all duration-200
          ${activeBg === "student" && "active-bg"}`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveBg("instructor")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white transition-all duration-200
          ${activeBg === "instructor" && "active-bg"}`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <div className="flex gap-3">
          <label>
            <p className="text-sm mb-1">
              First Name<sup className="text-red-800 m-1">*</sup>
            </p>
            <input
              required
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
          <label>
            <p className="text-sm mb-1">
              Last Name<sup className="text-red-800 m-1">*</sup>
            </p>
            <input
              required
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
        </div>
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
        <div className="flex gap-3">
          <label className="relative">
            <p className="text-sm mb-1">
              Create Password<sup className="text-red-800 m-1">*</sup>
            </p>
            <input
              required
              name="password"
              type={showCreatedPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <span
              onClick={() => setShowCreatedPassword((prev) => !prev)}
              className="absolute bottom-3 right-3"
            >
              {showCreatedPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-sm mb-1">
              Confirm Password<sup className="text-red-800 m-1">*</sup>
            </p>
            <input
              required
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute bottom-3 right-3"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>
        <button class="w-full relative inline-flex items-center justify-center p-0.5 mt-8 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 cursor-pointer">
          <span class=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Create Account
          </span>
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
