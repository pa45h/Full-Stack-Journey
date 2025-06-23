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
    <form onSubmit={submitHandler}>
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
      <label>
        <p>
          Password<sub>*</sub>
        </p>
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
