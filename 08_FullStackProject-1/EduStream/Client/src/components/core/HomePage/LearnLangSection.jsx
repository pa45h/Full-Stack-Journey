import React from "react";
import HighlightText from "./HighlightText";
import img1 from "../../../assets/Images/Know_your_progress.png"
import img2 from "../../../assets/Images/Compare_with_others.png"
import img3 from "../../../assets/Images/Plan_your_lessons.png"
import Button from "./Button";

const LearnLangSection = () => {
  return (
    <div className="mt-[130px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your swiss knife for
          <HighlightText text={" learning any language"} />
        </div>
        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center mt-5">
            <img src={img1} className="object-contain -mr-32" />
            <img src={img2} className="object-contain" />
            <img src={img3} className="object-contain -ml-36" />
        </div>

        <div className="w-fit">
          <Button active={true} linkto={"/signup"} >Learn More</Button>
        </div>

      </div>
    </div>
  );
};

export default LearnLangSection;
