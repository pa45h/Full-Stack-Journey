import React from "react";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabNames = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currTab, setCurrTab] = useState(tabNames[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currCard, setCurrCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrCard(result[0].courses[0].heading);
  };

  return (
    <div className="relative">
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={"Power of Code"} />
      </div>
      <p className="text-center text-richblack-300 text-md font-semibold">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="text-center flex flex-row rounded-full bg-richblack-800 mb-5 mt-5 border-richblack-100 p-1 w-fit mx-auto gap-6 shadow-sm shadow-richblack-400">
        {tabNames.map((tabName, index) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 ${
                currTab === tabName
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 py-2 px-7`}
              key={index}
              onClick={() => setMyCards(tabName)}
            >
              {tabName}
            </div>
          );
        })}
      </div>
      <div className="lg:h-[200px]"></div>

      <div className="absolute flex flex-row gap-16 justify-center w-full -bottom-36">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              cardData={course}
              currCard={currCard}
              setCurrCard={setCurrCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
