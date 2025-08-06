import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImg from "../../../assets/Images/TimelineImage.jpg";

const timeLine = [
  {
    logo: logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-14 items-center">
        <div className="w-[45%] flex flex-col gap-12">
          {timeLine.map((element, index) => {
            return (
              <div className="flex flex-row gap-6" key={index}>
                <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
                  <img src={element.logo} />
                </div>
                <div>
                  <h2 className="font-semibold text-[18px]">
                    {element.heading}
                  </h2>
                  <p className="text-base">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative shadow-[-1px_0px_50px_0px_rgb(17,138,255)] rounded-3xl">
          <img src={timelineImg} width={500} className="rounded-2xl" />
          <div className="absolute bg-richblue-900 flex flex-row text-white uppercase py-7 items-center justify-center left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl">
            <div className="flex flex-row gap-5 items-center border-r border-richblack-500 px-7">
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm font-bold text-richblue-50">
                Years of experience
              </p>
            </div>
            <div className="flex flex-row gap-5 items-center px-7">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm font-bold text-richblue-50">
                valuable courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
