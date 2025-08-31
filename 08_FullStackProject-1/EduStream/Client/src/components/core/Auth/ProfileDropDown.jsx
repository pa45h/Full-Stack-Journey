import React from "react";
import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ConfirmationModal from "../../common/ConfirmationModal";

import { logout } from "../../../services/operations/authAPI.service";

export default function ProfileDropDown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const ref = useRef(null);

  return (
    <button className="realtive group">
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover transition-all duration-200 group-hover:scale-105"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100 transition-all duration-200 group-hover:text-white" />
      </div>

      <div
        className="absolute top-[6.5%] right-[9%] z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800 transition-all duration-200 invisible opacity-0 group group-hover:visible group-hover:opacity-100"
        ref={ref}
      >
        <Link to="/dashboard/my-profile">
          <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
            <VscDashboard className="text-lg" />
            Dashboard
          </div>
        </Link>
        <div
          onClick={() =>
            setConfirmationModal({
              text1: "Are You Sure ?",
              text2: "You will be logged out of your account",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => dispatch(logout(navigate)),
              btn2Handler: () => setConfirmationModal(null),
            })
          }
          className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
        >
          <VscSignOut className="text-lg" />
          Logout
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </button>
  );
}
