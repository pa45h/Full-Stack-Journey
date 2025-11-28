"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";
import { useSearchParams } from "next/navigation";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import { useState } from "react";

function ResumeEditor() {
  const searchParams = useSearchParams();
  const currentStep = searchParams?.get("step") || steps[0].key;

  const [resumeData, setResumeData] = useState({});

  function setCurrentStep(step: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", step);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b p-2 text-center">
        <h1 className="text-2xl font-bold">Design Your Resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps to create and customize your resume. Your changes
          will be saved automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="w-full space-y-6 overflow-auto p-3 md:w-1/2">
            <BreadCrumbs
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow md:border-r" />
          <div className="hidden w-1/2 md:flex">
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div>
        </div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}

export default ResumeEditor;
