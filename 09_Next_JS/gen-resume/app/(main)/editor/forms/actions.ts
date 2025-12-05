"use server";

import ai from "@/lib/gemini";
import { generateSummarySchema, GenerateSummaryValues } from "@/lib/validation";

export async function generateSummary(input: GenerateSummaryValues) {
  const { jobTitle, workExperiences, educations, projects, skills } =
    generateSummarySchema.parse(input);

  let promptWithoutSummary = `You are an expert resume writer. Using the resume data below, write a concise 40-60 word professional summary tailored to the person's field and experience for the job role provided.
    Requirements:
    - Adapt tone and content to the user's industry and experience level.
    - Highlight key strengths, skills, and achievements.
    - Avoid generic adjectives, clichés, and invented information.
    - Do not repeat the same skill.
    - Be professional, ATS-friendly, and factual.
    - if something goes wrong, give response as you are giving tp end user, who is using this resume builder app.
    Resume Data (JSON):\n`;

  const resumeJson: any = {};

  if (jobTitle) {
    resumeJson.jobTitle = jobTitle;
  }

  if (workExperiences?.length) {
    resumeJson.workExperiences = workExperiences.map((we) => ({
      position: we.position || undefined,
      company: we.company || undefined,
      startDate: we.startDate || undefined,
      endDate: we.endDate || undefined,
      description: we.description || undefined,
    }));
  }

  if (educations?.length) {
    resumeJson.educations = educations.map((edu) => ({
      degree: edu.degree || undefined,
      fieldOfStudy: edu.fieldOfStudy || undefined,
      institution: edu.institution || undefined,
      startDate: edu.startDate || undefined,
      endDate: edu.endDate || undefined,
    }));
  }

  if (projects?.length) {
    resumeJson.projects = projects.map((proj) => ({
      title: proj.title || undefined,
      description: proj.description || undefined,
    }));
  }

  if (skills?.length) {
    resumeJson.skills = skills.filter(Boolean);
  }

  promptWithoutSummary += JSON.stringify(resumeJson, null, 2);
  promptWithoutSummary += `\n\nReturn only the professional summary text.`;

  console.log("Prompt---", promptWithoutSummary);

  const aiResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: promptWithoutSummary,
  });

  console.log("Summary---", aiResponse.text);

  if (!aiResponse.text) {
    throw new Error("Failed to generate summary");
  }

  return aiResponse.text.trim();
}

export async function enhanceSummary(summary: string) {
  const prompt = `You are an expert resume writer. Enhance and improve the following professional summary while maintaining its core message and factual accuracy.
    
Requirements:
- Keep the enhanced summary between 40-60 words
- Improve clarity, impact, and professionalism
- Use stronger action verbs and more compelling language
- Maintain ATS-friendly keywords
- Keep all factual information intact
- Make it more engaging and results-oriented
- Avoid clichés and generic phrases

Original Summary:
${summary}

Return only the enhanced professional summary text.`;

  console.log("Enhance Prompt---", prompt);

  const aiResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log("Enhanced Summary---", aiResponse.text);

  if (!aiResponse.text) {
    throw new Error("Failed to enhance summary");
  }

  return aiResponse.text.trim();
}
