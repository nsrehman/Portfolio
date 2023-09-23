import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Designed <span className={styles.iLoveAndAppreciateYou}>by Serena Alli &#10084;</span> and built by Nasir Rehman
      </p>
    </footer>
  );
}

export default Footer;