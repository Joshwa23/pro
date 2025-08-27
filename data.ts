import { Job } from "./types";

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Mid-level",
    remote: false,
    postedAgo: "8 months ago",
    salaryMin: 120000,
    salaryMax: 150000,
    tags: ["React", "TypeScript", "Tailwind"],
    description:
      "Innovate Inc. is seeking a skilled Frontend Developer to join our dynamic product team. You will build beautiful, accessible UIs with React and TypeScript.",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "Amazon",
    location: "New York, NY",
    type: "Full-time",
    level: "Senior",
    remote: false,
    postedAgo: "9 months ago",
    salaryMin: 150000,
    salaryMax: 180000,
    tags: ["Node.js", "PostgreSQL", "AWS"],
    description:
      "DataSolutions is looking for an experienced Backend Engineer to help design and build high-scale services.",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "Adobe",
    location: "Remote",
    type: "Contract",
    level: "Mid-level",
    remote: true,
    postedAgo: "11 months ago",
    salaryMin: 80000,
    salaryMax: 100000,
    tags: ["Figma", "Sketch", "Design Systems"],
    description:
      "Creative Co. needs a talented UX/UI Designer to create amazing user experiences across our web products.",
  },
  {
    id: "4",
    title: "Data Science Intern",
    company: "Google",
    location: "Boston, MA",
    type: "Internship",
    level: "Entry",
    remote: false,
    postedAgo: "11 months ago",
    salaryMin: 50000,
    salaryMax: 60000,
    tags: ["Python", "SQL", "Machine Learning"],
    description:
      "Alpha Analytics is excited to offer a Data Science Internship for aspiring analysts to work on real projects.",
  }
];
