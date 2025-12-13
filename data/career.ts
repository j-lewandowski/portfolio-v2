export interface ITimelineItem {
  date: string;
  title: string;
  description: string;
}

export const professionalExperience: ITimelineItem[] = [
  {
    date: "2025 - Present",
    title: "Junior Python Developer @ BlockWise",
    description:
      "Implementing AI models in production environments, ensuring optimal performance and scalability. Working with distributed neural networks, including configuration and monitoring of data flows. Fine-tuning machine learning models for specific business requirements. Creating and implementing regression models for data analysis and forecasting. Conducting performance analysis to optimize system efficiency.",
  },
  {
    date: "2024 - 2025",
    title: "Junior Fullstack Developer @ Mood Up",
    description:
      "Developed and maintained web applications using React and TypeScript for frontend implementation. Built and integrated APIs using NestJS framework. Wrote comprehensive unit tests for both frontend and backend layers using Vitest and Jest. Implemented end-to-end testing with Cypress for full application workflow validation. Created CI/CD pipelines and managed production deployments. Planned and designed infrastructure architecture. Integrated backend systems with Large Language Models (LLMs) for enhanced application functionality.",
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
    date: "2025 - Present",
    title:
      "Automation, Robotics and Industrial Engineering @ Warsaw University of Technology",
    description:
      "Master's degree program at the Faculty of Mechatronics, focusing on designing automation devices and modern control systems using computer and electronic technologies. Studying advanced topics including system modeling and analysis, artificial intelligence applications in control systems, big data analysis, and industrial IT system integration. The program combines theoretical knowledge with practical skills in automation, robotics, and industrial informatics.",
  },
  {
    date: "2021 - 2025",
    title: "Computer Science Degree @ Collegium Da Vinci Poznań",
    description:
      "Bachelor's degree in Computer Science with comprehensive coverage of programming fundamentals, algorithms, and data structures. Specialized in web technologies including frontend and backend development, database design, and software engineering principles. Gained hands-on experience with modern programming languages, frameworks, and development methodologies. Developed strong problem-solving skills and theoretical foundation in computer science that directly supported my transition into professional software development roles.",
  },
];
