import styles from "./ExperienceItem.module.css";
import { motion } from "framer-motion";

function ExperienceItem({ jobPosition }) {
  const { Company, JobTitle, Date, Description } = jobPosition;

  return (
    <div className={styles.container}>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        }}
        className={styles.timeline}
      >
        {Date}
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className={styles.title}>
          {Company}
          <span> | {JobTitle}</span>
        </h2>
        <p className={styles.timelineMobile}>{Date}</p>
        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className={styles.jobDescription}
        >
          {Description.map((desc, i) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3 }}
              key={i}
            >
              <p>{desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default ExperienceItem;
