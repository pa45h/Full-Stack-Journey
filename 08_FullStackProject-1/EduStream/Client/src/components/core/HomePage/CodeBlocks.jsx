import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Button from "./Button";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  button1,
  button2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      <div className="w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblue-200 font-bold">{subheading}</div>
        <div className="flex gap-7 mt-7">
          <Button active={button1.active} linkto={button1.linkto}>
            <div className="flex gap-2 items-center">
              {button1.btnText}
              <FaRegArrowAltCircleRight />
            </div>
          </Button>
          <Button active={button2.active} linkto={button2.linkto}>
            {button2.btnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
