import RenderSteps from "./RenderSteps";

export default function AddCourse() {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <div className="flex flex-1 flex-col">
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
          Add Course
        </h1>
        <RenderSteps />
      </div>
    </div>
  );
}
