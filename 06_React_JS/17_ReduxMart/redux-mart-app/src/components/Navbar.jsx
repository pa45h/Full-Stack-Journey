import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-3xl flex flex-wrap items-center justify-between mx-auto p-3">
        <NavLink to="/">
          <img className="h-12 w-[150px]" src="logo.png"></img>
        </NavLink>

        <div className="flex justify-center items-center gap-2">
          <NavLink to="/" className="text-[#C084FC] hover:text-[#8B5CF6]">
            Home
          </NavLink>

          <NavLink className="relative" to="/cart">
            {cart.length > 0 && (
              <div className="absolute top-2 right-2.5 bg-[#F472B6] w-4 h-4 text-[10px] flex justify-center items-center text-white rounded-full animate-bounce duration-1000">
                {cart.length}
              </div>
            )}
            <img className="h-10" src="emptyCart.png"></img>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
