import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../../common/IconBtn";
import {
  markLectureAsComplete,
  getCourseProgress,
} from "../../../services/operations/courseDetailsAPI.service";
import {
  setCompletedLectures,
  updateCompletedLectures,
} from "../../../slices/viewCourseSlice";

export default function VideoDetailsSidebar({ setReviewModal }) {
  const { token } = useSelector((state) => state.auth);
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { courseId, sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
    totalNoOfLectures,
  } = useSelector((state) => state.viewCourse);

  const fetchProgress = async () => {
    if (!courseId || !token) return;
    const response = await getCourseProgress(courseId, token);
    dispatch(setCompletedLectures(response));
  };

  useEffect(() => {
    (() => {
      fetchProgress();
      if (!courseSectionData) return;
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id);
      setVideoBarActive(activeSubSectionId);
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);

  const handleLectureCompletion = async () => {
    const res = await markLectureAsComplete(
      { courseId: courseEntireData._id, subSectionId: subSectionId },
      token
    );
    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }
  };

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col greenBgShadow">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`);
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>
            <IconBtn
              text="Add Review"
              customClasses="ml-auto"
              onClick={() => setReviewModal(true)}
            />
          </div>
          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-500">
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>
        </div>

        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData?.map((section, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(section?._id)}
              key={index}
            >
              {/* Section */}
              <div className="flex flex-row justify-between bg-richblack-700 px-5 py-4 transition-all duration-500">
                <div className="w-[70%] font-semibold">
                  {section?.sectionName}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-medium">
                    Lession {section?.subSection.length}
                  </span>
                  <span>
                    <BsChevronDown
                      className={`${
                        activeStatus === section?._id
                          ? "rotate-180"
                          : "rotate-0"
                      } transition-all duration-500`}
                    />
                  </span>
                </div>
              </div>

              {/* Sub Sections */}
              {activeStatus === section?._id && (
                <div className="transition-all duration-500">
                  {section.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videoBarActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
                      key={i}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${section?._id}/sub-section/${topic?._id}`
                        );
                        setVideoBarActive(topic?._id);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures?.includes(topic?._id)}
                        onChange={handleLectureCompletion}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
