import React from "react";

const SummaryCard = ({ title, value }) => (
  <div className="greenBgShadow p-5 rounded-2xl shadow-md flex flex-col items-center justify-center text-center">
    <p className="text-lg font-medium text-richblack-100">{title}</p>
    <p className="text-3xl font-bold text-yellow-50 mt-2">{value}</p>
  </div>
);

export default SummaryCard;
