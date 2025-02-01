export type Project = {
  name: string;
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  title: string;
  description: string;
  challenge: string;
  skills: string[];
};

export type PInfo = {
  title: string;
  location: string;
  email: string;
  info: string;
};

export type ResumeData = {
  name: string;
  personalInfo: PInfo;
  projects: Project[];
  skills: Record<string, string>;
};
