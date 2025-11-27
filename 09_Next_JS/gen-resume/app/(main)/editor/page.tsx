import { Metadata } from "next";
import React from "react";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Design Your Resume",
  description: "Edit your resume with GenResume.",
};

function editorPage() {
  return (
    <>
      <ResumeEditor />
    </>
  );
}

export default editorPage;
