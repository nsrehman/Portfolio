import styles from "./ProjectTag.module.css";

function ProjectTag({ tag }) {
  return <div className={styles.tag}><b>{tag}</b></div>;
}

export default ProjectTag;
