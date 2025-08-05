import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import Button from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";

function Home() {
  return (
    <div id="HomePage">
      <div className="Section-1 relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-richblack-500 shadow-sm hover:shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-6">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-[90%] text-center text-lg font-bold text-richblue-200 mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>
          <Button active={false} linkto={"/login"}>
            Book a Demo
          </Button>
        </div>

        <div className="mx-3 my-12 shadow-[20px_20px_0px_0px_rgba(17,138,178),-1px_0px_80px_0px_rgb(17,138,178)] rounded-full">
          <video muted loop autoPlay width={854} className="rounded-full">
            <source src={Banner} type="video/mp4"></source>
          </video>
        </div>
      </div>

      <div className="Section-2">
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your <HighlightText text={"coding potential"} /> with our
              online courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          button1={{
            btnText: "Try it Yourself",
            linkto: "/signup",
            active: true,
          }}
          button2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={""}
          codeColor={"text-yellow-25"}
        />
      </div>
    </div>
  );
}

export default Home;
