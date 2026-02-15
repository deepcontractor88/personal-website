export interface EducationRow {
  degree: string;
  school: string;
  year: string;
  field?: string;
  logo?: string;
}

export const education: EducationRow[] = [
  {
    degree: "Bachelor of Technology, Computer Science and Engineering",
    school: "JK Lakshmipat University, India",
    year: "2021",
    field: "Graduated 2021",
    logo: "/images/jklu-university-logo.jpg",
  },
  {
    degree: "Big Data & Advanced Analytics Specialization",
    school: "IBM",
    year: "2021",
    field: "Graduated 2021",
    logo: "/images/ibm-logo.png",
  },
];
