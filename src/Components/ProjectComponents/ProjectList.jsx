import ProjectTabs from "./ProjectTabs";
import ProjectItem from "./ProjectItem";
import styles from "./ProjectList.module.css";
import { useState } from "react";
import Section from "../SectionComponents/Section";

// const Project = [
//     {
//         Company: "Ontario Power Generation",
//         Title: "Engineering Intern",
//         Desc: "put stuff here from resume"
//     }
// ]
const Projects = {

  Kando: {
    Title: "Kan-Do",
    ShortHand: "Kan-Do",
    Description: [
      "Utilizing the WPF platform with MVVM architecture, created Kan-Do, a Kanban board to help visualize work and maximize efficiency following the agile methodology",
      "Handled backend functionality including implementing a MSSQL server for account services and board information",
    ],
    Tags: ["C#", "XAML", ".NET Core", "WPF", "MSSQL", "Entity Framework"]
  },
  CapMiner: {
    Title: "CapMiner",
    ShortHand: "CapMiner",
    Description: [
      "Building off kawpowminer, a KawPOW based miner for Ravencoin, created CapMiner improving mining profits by 173%",
      "Using PowerShell and batch scripts, created algorithm to dynamically adjust GPU memory clock and power limit to maximize mining efficiency ",
    ],
    Tags: ["C++", "C", "Cuda", "Shell Scripting"]
  },
  SPOA: {
    Title: "Secure Purchase Order Application",
    ShortHand: "Python Encryption App",
    Description: [
      "A CLI based application that mimicks company internal purchase requests. Allows the user to enter a purchase request and routes it by secure email to a supervisor for signature and then to the purchasing department",
      "All connections between parties are preceded by public-key mutual authentication and messages are encrypted using RSA public-key cryptography",
      "Generates purchase invoices as PDFs with embedded JSON and using Google’s smtp server with TLS, emails the PDF between parties",
    ],
    Tags: ["Python", "Gmail API", "RSA Encryption"]
  },
  VAssistant: {
    Title: "Voice Activated and Controlled Personal Assistant",
    ShortHand: "Virutal Assistant",
    Description: [
      "Created a voice activated and controlled virtual assistant to control various application settings including Spotify, Discord, and Steam. Built using Pythons pyttsx3 and speech_recognition libraries",
    ],
    Tags: ["Python", "Spotify API", "Google Speech API"]
  },
  P2P: {
    Title: "Peer-to-Peer Hosting Service",
    ShortHand: "P2P Server",
    Description: [
      "A C based uTorrent like peer network hosting server with a central index server. Constructed and tested using UDP and TCP connection between multiple VMs",
    ],
    Tags: ["C"]
  }
};

function ProjectList() {
  const [activeTab, setActiveTab] = useState("Kando");

  function handleTabSelect(newTab) {
    setActiveTab(newTab);
  }

  return (
    <Section header="PROJECTS" id="Projects">
      <div className={styles.projectList}>
        <div className={styles.projectTabsContainer}>
          <ProjectTabs
            projects={Projects}
            onSelect={handleTabSelect}
            activeTab={activeTab}
          />
        </div>
        <ProjectItem
          key={activeTab}
          project={Projects[activeTab]}
          activeTab={activeTab}
        />
      </div>
    </Section>
  );
}

export default ProjectList;
