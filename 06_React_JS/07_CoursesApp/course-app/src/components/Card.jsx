import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function likeHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (!likedCourses.length) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="w-[300px] bg-blue-950 rounded-md overflow-hidden text-white hover:shadow-2xl hover:scale-101 transition-all duration-300">
      <div className="relative">
        <img src={course.image.url} alt={course + "-img"} loading="lazy" />

        <div className="bg-white rounded-full absolute w-[36px] h-[36px] right-1 bottom-1 flex place-content-center">
          <button className="hover:cursor-pointer" onClick={likeHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-3">
        <p className="text-lg leading-6 font-semibold">{course.title}</p>
        <p className="mt-1 text-sm">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
