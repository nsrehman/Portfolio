import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function SkillPill({ skill }) {
  const [name, iconPackageName, srcPath] = skill;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{type: 'spring'}}
      className={styles.pill}
    >
      {srcPath && (
        <img
          src={srcPath}
          alt={`${name} logo`}
          className={styles.skillLogo}
        />
      )}
      {iconPackageName && (
        <FontAwesomeIcon
          icon={`fa-brands fa-${iconPackageName}`}
          style={{ color: "#3965ff", height: "1rem", marginRight: "5px" }}
        />
      )}
      <p className={styles.pillText}>
        <b>{name}</b>
      </p>
    </motion.div>
  );
}

function Skills() {
  const Skills = [
    ["ReactJS", "react", null],
    ["Next.js", null, "nextjs-icon-svgrepo-com.svg"],
    ["Express.js", null, "express-svgrepo-com.svg"],
    ["Java", "java", null],
    ["MongoDB", null, "mongodb-svgrepo-com.svg"],
    ["Python", "python", null],
    ["C", null, "icons8-c-programming.svg"],
    ["Javascript", "square-js", null],
    ["C Sharp", null, "icons8-c-sharp-logo.svg"],
    ["SQL", null, "mysql-svgrepo-com.svg"],
    [".NET", null, "dotnet-svgrepo-com.svg"],
  ];
  return (
    <motion.div
    variants={{
      visible: { transition: { staggerChildren: 0.1, delayChildren:0.35} }
    }}
      className={styles.skillContainer}
    >
      {Skills.map((skill) => (
        <SkillPill skill={skill} key={skill[0]} />
      ))}
    </motion.div>
  );
}

export default Skills;
