import styles from "./ProjectTabs.module.css";
import { motion } from "framer-motion";

const isMobile = window.innerWidth < 601;

function Tab({ children, isActive, onSelect }) {
  return (
    <div className={styles.tab}>
      <button
        type="button"
        onClick={onSelect}
        className={`${styles.button} ${isActive ? styles.activeButton : ''}`}
      >
        {children}
      </button>
      {isActive && (
        <motion.div
          layoutId="tab-inditator"
          className={styles.activeTabIndicator}
        />
      )}
    </div>
  );
}

function ProjectTabs({ projects, onSelect, activeTab }) {
  return (
    <>
      {Object.keys(projects).map((key, i) => (
        <Tab
          key={key}
          onSelect={() => onSelect(key)}
          isActive={activeTab === key}
        >
          {isMobile ? <code>{`0${i + 1}.`}</code> : projects[key]["ShortHand"]}
        </Tab>
      ))}
    </>
  );
}

export default ProjectTabs;
