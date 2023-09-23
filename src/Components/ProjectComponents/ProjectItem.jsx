import ProjectTag from "./ProjectTag";
import styles from "./ProjectItem.module.css";
import { motion } from "framer-motion";

function ProjectItem({ project }) {
  const { Title, Description, Tags } = project;
  return (
    <div className={styles.projectContainer}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={styles.container}
      >
        <h2 className={styles.title}>{Title}</h2>
        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className={styles.description}
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
        <motion.ul
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className={styles.tagList}
        >
          {Tags.map((projectTag, t) => (
            <motion.li
              key={t}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring" }}
            >
              <ProjectTag tag={projectTag} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default ProjectItem;
