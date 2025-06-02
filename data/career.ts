export interface ITimelineItem {
  date: string;
  title: string;
  description: string;
}

export const professionalExperience: ITimelineItem[] = [
  {
    date: "2025 - Present",
    title: "Junior Python Developer @ BlockWise",
    description: "",
  },
  {
    date: "2024 - 2025",
    title: "Junior Fullstack Developer @ Mood Up",
    description:
      "Developing and maintaining web applications using React, NestJS. Collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    date: "2022 - Present",
    title: "Tutor @ AMBITNI",
    description:
      "Teaching programming to students and preparing them for computer science final exams. Focusing on developing practical coding skills and theoretical knowledge.",
  },
];

export const educationalExperience: ITimelineItem[] = [
  {
    date: "2021 - 2025",
    title: "Computer Science Degree @ Collegium Da Vinci Poznań",
    description:
      "Studied computer science with a focus on web technologies and software engineering principles.",
  },
];
