import styles from "./Header.module.css";
import { motion } from "framer-motion";

function NavLink({ heading, href }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <motion.a
        variants={{
          rest: { width: "auto", transition: { staggerChildren: 2 } },
          hover: { width: "auto" },
        }}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={styles.navLink}
        href={`#${href}`}
      >
        {heading}
        <motion.div
          variants={{ rest: { width: "0px" }, hover: { width: "3rem" } }}
          className={styles.bar}
        ></motion.div>
      </motion.a>
    </motion.div>
  );
}

function Header() {
  return (
    <motion.nav
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={styles.navBar}
      initial="hidden"
      animate="visible"
    >
      <NavLink heading="ABOUT" href="About" />
      <NavLink heading="PROJECTS" href="Projects" />
      <NavLink heading="EXPERIENCE" href="Jobs" />
      <NavLink heading="CONTACT" href="Contact" />
    </motion.nav>
  );
}

export default Header;
