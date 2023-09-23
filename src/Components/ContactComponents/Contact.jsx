import styles from "./Contact.module.css";
import Section from "../SectionComponents/Section";

function Contact() {
  return (
    <Section id="Contact" header="Let's Connect">
      <p className={styles.contactParagraph}>
        I'm always open to new opportunities, collaborations, and projects.
        Whether you're looking for a software engineer to join your team, need
        assistance on an exciting project, or just want to chat about
        technology, feel free to get in touch. Thank you for visiting my
        portfolio, and I look forward to connecting with you.
      </p>
      <a
        className={styles.mailLink}
        href="mailto:nsamadr@gmail.com"
        target="_blank"
      >
        Get in touch
      </a>
    </Section>
  );
}

export default Contact;
