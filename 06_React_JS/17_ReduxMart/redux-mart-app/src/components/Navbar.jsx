import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto p-3">
        <NavLink to="/">
          <img className="h-12 w-[150px]" src="logo.png"></img>
        </NavLink>

        <div className="flex justify-center items-center gap-2">
          <NavLink
            to="/"
            className="text-[#C084FC] hover:text-[#8B5CF6]"
          >
            Home
          </NavLink>

          <NavLink to="/cart">
            <img className="h-10" src="emptyCart.png"></img>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
