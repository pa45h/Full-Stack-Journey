"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";
import { useSearchParams } from "next/navigation";
import BreadCrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import { useState } from "react";
import ResumePreviewSection from "./ResumePreviewSection";
import { cn } from "@/lib/utils";
import useAutoSave from "@/hooks/useAutoSave";
import useUnloadWarning from "@/hooks/useUnloadWarning";

function ResumeEditor() {
  const searchParams = useSearchParams();
  const currentStep = searchParams?.get("step") || steps[0].key;

  const [resumeData, setResumeData] = useState({});
  const [resumePreview, setResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSave(resumeData);
  useUnloadWarning(hasUnsavedChanges);

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
          <div
            className={cn(
              "w-full space-y-6 overflow-auto p-3 md:block md:w-1/2",
              resumePreview && "hidden",
            )}
          >
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
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
            className={cn(resumePreview && "flex")}
          />
        </div>
      </main>
      <Footer
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        resumePreview={resumePreview}
        setResumePreview={setResumePreview}
        isSaving={isSaving}
      />
    </div>
  );
}

export default ResumeEditor;
