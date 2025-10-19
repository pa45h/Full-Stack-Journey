import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../../../services/operations/profileAPI.service";
import SummaryCard from "./SummaryCard";
import TableSection from "./TableSection";

const AdminDashboard = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [allData, setAllData] = useState({
    students: [],
    instructors: [],
    courses: [],
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await dispatch(getAllData(token));

      if (res)
        setAllData({
          students: res?.allStudents,
          instructors: res?.allInstructors,
          courses: res?.allCourses,
        });

      console.log("allData---", allData);

      setLoading(false);
    })();
  }, [dispatch, token]);

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen p-6 bg-richblack-900 text-richblack-25">
      <h1 className="text-3xl font-semibold text-yellow-50 mb-8">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <SummaryCard
          title="Total Students"
          value={allData?.students?.length || 0}
        />
        <SummaryCard
          title="Total Instructors"
          value={allData?.instructors?.length || 0}
        />
        <SummaryCard
          title="Total Courses"
          value={allData?.courses?.length || 0}
        />
      </div>

      {/* Instructors Table */}
      <TableSection
        title="Instructors"
        headers={["Name", "Email", "Courses"]}
        data={allData?.instructors}
        rowRenderer={(inst) => [
          `${inst.firstName} ${inst.lastName}`,
          inst.email,
          inst.courses?.length || 0,
        ]}
      />

      {/* Students Table */}
      <TableSection
        title="Students"
        headers={["Name", "Email", "Enrolled Courses"]}
        data={allData?.students}
        rowRenderer={(stu) => [
          `${stu.firstName} ${stu.lastName}`,
          stu.email,
          stu.courses?.length || 0,
        ]}
      />

      {/* Courses Table */}
      <TableSection
        title="Courses"
        headers={["Title", "Instructor", "Category", "Price"]}
        data={allData?.courses}
        rowRenderer={(course) => [
          course.courseName,
          `${course?.instructor?.firstName} ${course?.instructor?.lastName}`,
          course.category?.name || "N/A",
          `₹${course.price}`,
        ]}
      />
    </div>
  );
};

export default AdminDashboard;
