export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  level: "Entry" | "Mid-level" | "Senior";
  remote: boolean;
  postedAgo: string;
  salaryMin: number;
  salaryMax: number;
  tags: string[];
  description: string;
};
