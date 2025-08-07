import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import Button from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearnLangSection from "../components/core/HomePage/LearnLangSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";

function Home() {
  return (
    <div id="HomePage">
      <div className="Section-1.1 relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between pt-16">
        <Link to={"/signup"}>
          <div className="group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit shadow-richblack-500 shadow-sm hover:shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-6">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-[80%] text-center text-lg font-bold text-richblue-200 mt-4">
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

      <div className="Section-1.2 relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between">
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
          codeblock={`let topics = ["DSA", "DBMS", "OOP", "Web Dev", "AI-ML"];
                      const instructor = {
                          name: "Parth Katariya",
                      };
                      function greet(user) {
                        console.log(\`Welcome back, \${user.name}!\`);
                        console.log(\`Let's start learning 🎯\`);
                      }
                      greet(user);
                    `}
          codeColor={"text-yellow-25"}
          backgroundGradient={
            "bg-[rgb(255,232,61,0.1)] shadow-[0px_0px_1000px_0px_rgb(255,232,61),10px_-10px_0px_0px_rgb(255,232,61)]"
          }
        />
      </div>

      <div className="Section-1.3 relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between">
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className="text-4xl font-semibold">
              Start <HighlightText text={"coding in second"} />
            </div>
          }
          subheading={
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          button1={{
            btnText: "Continue Lesson",
            linkto: "/signup",
            active: true,
          }}
          button2={{
            btnText: "Learn More",
            linkto: "/login",
            active: false,
          }}
          codeblock={`public class StartCoding {
                        public static void main(String[] args) {
                          String today = "Day 1";
                          String focus = "Understand syntax";
                          boolean feelingReady = true;
                          System.out.println("📘 " + today + ": " + focus);
                          if (feelingReady) {
                            System.out.println("Let's write your first program! 🚀");
                          }
                        }}`}
          codeColor={"text-caribbeangreen-100"}
          backgroundGradient={
            "bg-[rgb(6,214,160,0.1)] shadow-[0px_0px_1000px_0px_rgb(6,214,160),-10px_-10px_0px_0px_rgb(6,214,160)]"
          }
        />
      </div>

      <ExploreMore />
      <div className="Section-2 bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[333px] -z-10">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto">
            <div className="h-[200px]"></div>
            <div className="flex gap-7 text-white">
              <Button active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaRegArrowAltCircleRight />
                </div>
              </Button>
              <Button active={false} linkto={"/login"}>
                <div className="flex items-center gap-3">Learn More</div>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-row gap-5 mb-10 mt-[95px] justify-center">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px]">
                The modern EduStream is the dictates its own terms. Today, to be
                a competitive specialist requires more than professional skills.
              </div>
              <Button active={true} linkto={"/signup"}>
                Learn More
              </Button>
            </div>
          </div>
          <TimelineSection />
          <LearnLangSection />
        </div>
      </div>

      <div className="Section-3 w-11/12 max-w-maxContent flex flex-col items-center mx-auto justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />

        <h2 className="text-4xl text-center font-semibold mt-10 mb-16">
          Reviews from other learners
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
