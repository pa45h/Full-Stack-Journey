import useDimentions from "@/hooks/useDimentions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { formatDate } from "date-fns";
import { Badge } from "./ui/badge";
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import Link from "next/link";
import {
  Github,
  Link2,
  Linkedin,
  Mail,
  MapPinHouse,
  Phone,
} from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

function ResumePreview({ resumeData, className }: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null!);

  const { width, height } = useDimentions(containerRef);

  return (
    <div
      className={cn(
        "aspect-210/297 h-fit w-full bg-white text-black",
        className,
      )}
      ref={containerRef}
    >
      <div
        className={cn("space-y-4 p-5", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
      >
        <PersonalInfoHeader resumeData={resumeData} />
        <SummarySection resumeData={resumeData} />
        <SkillsSection resumeData={resumeData} />
        <ProjectsSection resumeData={resumeData} />
        <EducationSection resumeData={resumeData} />
        <WorkExperienceSection resumeData={resumeData} />
        <CustomSections resumeData={resumeData} />
      </div>
    </div>
  );
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    photo,
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    linkedinUrl,
    githubUrl,
    otherUrl_1,
    otherUrlLabel_1,
    otherUrl_2,
    otherUrlLabel_2,
    colorHex,
    borderStyle,
  } = resumeData;

  const [photoSrc, setPhotoSrc] = useState(photo instanceof File ? "" : photo);

  useEffect(() => {
    const objectUrl = photo instanceof File ? URL.createObjectURL(photo) : "";

    if (objectUrl) setPhotoSrc(objectUrl);

    if (photo === null) setPhotoSrc("");

    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);
  return (
    <div className="space-y-4">
      <div className="w-fit mx-auto flex items-center gap-14">
        {photoSrc && (
          <Image
            src={photoSrc}
            width={120}
            height={120}
            alt="Profile Picture"
            className="aspect-square object-cover"
            style={{
              borderRadius:
                borderStyle === BorderStyles.SQUARE
                  ? "0px"
                  : borderStyle === BorderStyles.CIRCLE
                    ? "9999px"
                    : "8px",
            }}
          />
        )}
        <div className="flex flex-col items-start space-y-2">
          <div className="space-y-1">
            <h1
              className="text-5xl font-bold tracking-tight"
              style={{
                color: colorHex,
              }}
            >
              {firstName} {lastName}
            </h1>
            <p
              className="text-xl font-medium"
              style={{
                color: colorHex,
              }}
            >
              {jobTitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
            {(city || country) && (
              <div className="flex items-center gap-1.5">
                <MapPinHouse className="size-4" />
                <span>
                  {city}
                  {city && country ? ", " : ""}
                  {country}
                </span>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="size-4" />
                <Link href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </Link>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-1.5">
                <Mail className="size-4" />
                <Link href={`mailto:${email}`} className="hover:underline">
                  {email}
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 hover:underline"
                style={{ color: colorHex }}
              >
                <Linkedin className="size-4" style={{ color: colorHex }} />
                <span>LinkedIn</span>
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 hover:underline"
                style={{ color: colorHex }}
              >
                <Github className="size-4" style={{ color: colorHex }} />
                <span>GitHub</span>
              </Link>
            )}
            {otherUrl_1 && otherUrlLabel_1 && (
              <Link
                href={otherUrl_1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1.5 hover:underline items-center"
                style={{ color: colorHex }}
              >
                <Link2 className="size-4" style={{ color: colorHex }} />
                <span>{otherUrlLabel_1}</span>
              </Link>
            )}
            {otherUrl_2 && otherUrlLabel_2 && (
              <Link
                href={otherUrl_2}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex gap-1.5 items-center"
                style={{ color: colorHex }}
              >
                <Link2 className="size-4" style={{ color: colorHex }} />
                <span>{otherUrlLabel_2}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary, colorHex } = resumeData;

  if (!summary) return null;

  return (
    <>
      <hr
        className="border-2 border-black"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Professional Summary
        </p>
        <div className="text-sm whitespace-pre-line">{summary}</div>
      </div>
    </>
  );
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences, colorHex } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
    <>
      <hr
        className="border-2 border-black"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Work Experience
        </p>
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div
              className="flex items-center justify-between text-sm font-semibold"
              style={{
                color: colorHex,
              }}
            >
              <span>{exp.position}</span>
              {exp.startDate && (
                <span className="text-xs font-normal">
                  {" "}
                  {formatDate(exp.startDate, "MM/yyyy")} -
                  {exp.endDate
                    ? formatDate(exp.endDate, "MM/yyyy")
                    : " Present"}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{exp.company}</p>
            <div className="text-xs whitespace-pre-line">{exp.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations, colorHex } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
    <>
      <hr
        className="border-2 border-black"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Education
        </p>
        {educationsNotEmpty.map((edu, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div
              className="flex items-center justify-between text-sm font-semibold"
              style={{
                color: colorHex,
              }}
            >
              <span>
                {edu.degree}
                {edu.fieldOfStudy && ", " + edu.fieldOfStudy}
              </span>
              {edu.startDate && (
                <span className="text-xs font-normal">
                  {" "}
                  {formatDate(edu.startDate, "yyyy")}
                  {edu.endDate && " - " + formatDate(edu.endDate, "yyyy")}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold">{edu.institution}</p>
            {edu.grade && (
              <div className="text-xs whitespace-pre-line">{edu.grade}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function ProjectsSection({ resumeData }: ResumeSectionProps) {
  const { projects, colorHex } = resumeData;

  const projectsNotEmpty = projects?.filter(
    (proj) => Object.values(proj).filter(Boolean).length > 0,
  );

  if (!projectsNotEmpty?.length) return null;

  return (
    <>
      <hr
        className="border-2 border-black"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Projects
        </p>
        {projectsNotEmpty.map((proj, index) => (
          <div key={index} className="break-inside-avoid space-y-1">
            <div
              className="flex items-center justify-between text-sm font-semibold"
              style={{
                color: colorHex,
              }}
            >
              <span>{proj.title}</span>
              <div className="flex space-x-2 text-xs font-normal">
                {proj.liveUrl && (
                  <Link
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{
                      color: colorHex,
                    }}
                  >
                    Live Demo
                  </Link>
                )}
                {proj.repoUrl && (
                  <Link
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{
                      color: colorHex,
                    }}
                  >
                    Source Code
                  </Link>
                )}
              </div>
            </div>
            <div className="text-xs whitespace-pre-line">
              {proj.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SkillsSection({ resumeData }: ResumeSectionProps) {
  const { skills, colorHex, borderStyle } = resumeData;

  if (!skills?.length) return null;

  return (
    <>
      <hr
        className="border-2 border-black"
        style={{
          borderColor: colorHex,
        }}
      />
      <div className="break-inside-avoid space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            color: colorHex,
          }}
        >
          Skills
        </p>
        <div className="flex break-inside-avoid flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-md bg-black text-white hover:bg-black"
              style={{
                backgroundColor: colorHex,
                borderRadius:
                  borderStyle === BorderStyles.SQUARE
                    ? "0px"
                    : borderStyle === BorderStyles.CIRCLE
                      ? "9999px"
                      : "8px",
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
}

function CustomSections({ resumeData }: ResumeSectionProps) {
  const { customSections, colorHex } = resumeData;

  const customSectionsNotEmpty = customSections?.filter(
    (section) => Object.values(section).filter(Boolean).length > 0,
  );

  if (!customSectionsNotEmpty?.length) return null;

  return (
    <>
      <div className="break-inside-avoid space-y-4">
        {customSectionsNotEmpty.map((section, index) => {
          const itemsNotEmpty = section.items?.filter(
            (item) => Object.values(item).filter(Boolean).length > 0,
          );
          if (!itemsNotEmpty?.length) return null;
          return (
            <div key={index} className="space-y-4">
              <hr
                className="border-2 border-black"
                style={{
                  borderColor: colorHex,
                }}
              />
              <p
                className="text-lg font-semibold"
                style={{
                  color: colorHex,
                }}
              >
                {section.title}
              </p>
              {itemsNotEmpty.map((item, itemIndex) => (
                <>
                  <div key={itemIndex} className="space-y-1">
                    <div
                      className="flex items-center justify-between text-sm font-semibold"
                      style={{
                        color: colorHex,
                      }}
                    >
                      <span>{item.title}</span>
                      {item.dateRange && (
                        <span className="text-xs font-normal">
                          {item.dateRange}
                        </span>
                      )}
                    </div>
                    {item.subTitle && (
                      <p className="text-xs font-semibold">{item.subTitle}</p>
                    )}
                    {item.description && (
                      <div className="text-xs whitespace-pre-line">
                        {item.description}
                      </div>
                    )}
                  </div>
                </>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ResumePreview;
