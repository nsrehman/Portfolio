import Section from "../SectionComponents/Section";
import ExperienceItem from "./ExperienceItem";

function ExperienceList() {
  const experiences = [
    {
      Company: "Ontario Power Generation",
      JobTitle: "Engineering Intern",
      Date: `JULY 2020 — JULY 2021`,
      Description: [
        "Developed VB software to query SQL server for employee access events and save daily information as well as ranged data in CSV file for security and management purposes saving the company an estimated $1,000,000 over 5 years.",
        "Created critical safety parameter monitoring displays using PI ProcessBook for the Site Monitoring Center",
        "Recorded training aid videos to assess and prepare the authorized nuclear operators to get accustomed to new CPSM displays",
      ],
    },
    {
      Company: "Academind",
      JobTitle: "React Complete Course",
      Date: "OCT 2022 — APRIL 2023",
      Description: [
        "Comprehensive understanding of Reacts core features as well as prominent tool-kits and industry common practices",
        "Covered topic including hooks and custom hooks, RESTful implementations, Redux and React Router, Next.js, and TypeScript",
      ],
    },
  ];

  return (
    <Section header="EXPERIENCE" id="Jobs">
      {experiences.map((jobPosition, i) => (
        <ExperienceItem jobPosition={jobPosition} key={i}></ExperienceItem>
      ))}
    </Section>
  );
}

export default ExperienceList;
