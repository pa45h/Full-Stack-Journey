import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div className="text-richblack-5">
      <h1 className="mb-10 sm:my-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>

      {/* Section-1 */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between rounded-sm greenBgShadow p-3 sm:p-8 sm:px-12">
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-20 rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        />
      </div>

      {/* Section-2 */}
      <div className="my-10 flex flex-col gap-y-10 rounded-sm greenBgShadow p-3 sm:p-8 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg  text-richblack-400">About</p>
          <IconBtn
            text="Edit"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          />
        </div>
        <p className="text-richblack-5 text-sm font-semibold">
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Section-3 */}
      <div className="my-10 flex flex-col gap-y-10 rounded-sm greenBgShadow p-3 sm:p-8 sm:px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            className="flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-sm py-2 px-5 font-semibold text-richblack-900"
            text="Edit"
            onClick={() => {
              navigate("/dashboard/settings");
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-y-4 max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNo ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.dateOfBirth ?? "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
