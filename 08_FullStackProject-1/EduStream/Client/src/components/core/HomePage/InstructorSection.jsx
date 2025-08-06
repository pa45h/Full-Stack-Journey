import React from "react";
import HighlightText from "./HighlightText";
import Button from "./Button";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Instructor = require("../../../assets/Images/Instructor.png");

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-row gap-20 items-center">
        <div className="w-[50%]">
          <img src={Instructor} />
        </div>

        <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">
            Become an <HighlightText text={"instructor"} />
          </div>
          <p className="font-medium text-[16px] w-[80%] text-richblue-200">
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
