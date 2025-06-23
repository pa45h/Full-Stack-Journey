import React from "react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-evenly items-center">
      <Link to="/" className="text-4xl">
        RouteApp
      </Link>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Log In</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out!");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
