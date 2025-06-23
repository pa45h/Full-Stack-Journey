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
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
          />
        </label>
        <div>
          <label>
            <p>
              Create Password<sub>*</sub>
            </p>
            <input
              required
              name="password"
              type={showCreatedPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
            />

            <span onClick={() => setShowCreatedPassword((prev) => !prev)}>
              {showCreatedPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sub>*</sub>
            </p>
            <input
              required
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
            />

            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
