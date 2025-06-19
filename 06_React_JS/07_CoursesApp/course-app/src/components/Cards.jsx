import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });

    return allCourses;
  };

  return (
    <div>
      {courses ? (
        getCourses().map((course) => <Card key={course.id} course={course} />)
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Cards;
