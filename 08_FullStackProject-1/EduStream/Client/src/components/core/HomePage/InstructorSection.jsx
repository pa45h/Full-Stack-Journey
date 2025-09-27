import React from "react";
import Button from "./Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Instructor = require("../../../assets/Images/Instructor.png");

const InstructorSection = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[40%] flex items-center justify-center rounded-full shadow-[0px_0px_100px_0px_rgb(50,100,200)]">
          <img
            src={Instructor}
            className="h-[500px] hover:scale-105 transition-all duration-200"
          />
        </div>

        <div className="lg:w-[50%] flex flex-col gap-10 items-center text-center">
          <p className="font-medium text-[16px] lg:w-[80%] text-richblue-200">
            Instructors from around the world teach millions of students on
            EduStream. We provide the tools and skills to teach what you love.
          </p>
          <div className="w-fit">
            <Button active={true} linkto={"/signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Teaching Today
                <FaRegArrowAltCircleRight />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
