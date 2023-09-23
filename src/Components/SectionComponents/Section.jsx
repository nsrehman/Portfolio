import styles from "./Section.module.css";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

function Section({ delay, children, id, header }) {
  return (
    <motion.div
      variants={{
        hidden: {opacity: 0},
        visible: { opacity: 1}
      }}
      initial='hidden'
      whileInView='visible'
      transition={{ duration: 0.5, staggerChildren:0.1, delay: delay ? delay : 0, delayChildren: delay ? delay: 0}}
      viewport={{ once: true, amount: 0.3 }}
    >
      {header && <SectionHeader id={id}>{header}</SectionHeader>}
      <section className={styles.section}>{children}</section>
    </motion.div>
  );
}

export default Section;
