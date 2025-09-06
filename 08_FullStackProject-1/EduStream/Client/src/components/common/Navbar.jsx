import React, { useState, useEffect } from "react";
import { Link, matchPath, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector.service";
import { categories } from "../../services/apis.service";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      const subLinksArr = await result.data.allCategories;
      setSubLinks(subLinksArr);
    } catch (error) {
      console.log("Could Not Fetch The Category List :- ", error);
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to={"/"}>
          <img src={logo} width={160} />
        </Link>

        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="relative flex items-center gap-1 group cursor-pointer">
                      <p className="text-richblack-500 transition-all duration-200 group-hover:text-white">
                        {link.title}
                      </p>
                      <IoMdArrowDropdown className="text-richblack-500 transition-all duration-200 group-hover:text-white" />

                      <div className="invisible absolute left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-5 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-[99%] lg:w-[200px] translate-x-[-50%] translate-y-[12%] z-50 justify-center p-4 group text-[15px] font-medium">
                        <div className="absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded bg-richblack-5 translate-y-[-30%] translate-x-[85%] -z-10"></div>
                        {subLinks.length > 0 ? (
                          subLinks.map((subLink, index) => (
                            <Link
                              to={`/catalog/${subLink.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              key={index}
                            >
                              <p className="hover:bg-richblue-25 p-4 rounded-md transition-all duration-200">
                                {subLink.name}
                              </p>
                            </Link>
                          ))
                        ) : (
                          <div className="text-center text-sm text-richblack-400">
                            No Categories
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-500"
                        } transition-all duration-200 hover:text-white`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-x-4 items-center justify-center">
          {user && user?.accountType !== "instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <GiShoppingCart className="transition-all duration-200 scale-150 hover:scale-[1.7]" />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}

          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md transition-all duration-200 hover:scale-95">
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md transition-all duration-200 hover:scale-95">
                Sign Up
              </button>
            </Link>
          )}
          {token && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
