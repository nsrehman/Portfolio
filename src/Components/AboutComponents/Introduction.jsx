import styles from "./Introduction.module.css";
import Section from "../SectionComponents/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <Section>
      <div className={styles.introWrapper}>
        <motion.h2
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={styles.introText}
        >
          Hi, I'm
        </motion.h2>
        <motion.h1
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={styles.name}
        >
          Nasir Rehman.
        </motion.h1>
        <motion.h3
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={styles.role}
        >
          Software Engineer
        </motion.h3>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={styles.blurb}
        >
          I'm a passionate and dedicated software engineer with a
          profound love for crafting innovative digital solutions. With a strong
          foundation in computer engineering and years of hands-on experience, I
          thrive on turning complex problems into elegant, efficient, and
          user-friendly software.
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className={styles.linkContainer}
        >
          <a href="https://github.com/nsrehman" aria-label="Go to GitHub Profile">
            <FontAwesomeIcon
              icon="fa-brands fa-github"
              className={styles.links}
            />
          </a>
          <a href="https://linkedin.com/in/nsrehman7" aria-label="Go to Linkedin Profile">
            <FontAwesomeIcon
              icon="fa-brands fa-linkedin"
              className={styles.links}
            />
          </a>
        </motion.div>
      </div>
    </Section>
  );
}

export default Introduction;
