import Skills from "./Skills";
import Section from "../SectionComponents/Section";
import { motion } from "framer-motion";

function About() {
  return (
    <Section header="ABOUT" id="About">
      <motion.div
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          My journey into the world of programming began in the my 11th grade
          comp sci course with my introduction to turing where I made a 2D
          pokémon like sprite game. Since then, I've been on an exciting
          adventure of continuous learning and growth. Throughout my career,
          I've had the privilege of working on a diverse range of projects, from
          programming car navigation in assembly to developing full-stack
          applications.
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          I'm currently focusing on front-end and full-stack development,
          specifically the within the React ecosystem; however, I'm always excited to dive
          into new technologies and frameworks. Outside of my love for
          programming I also golf, rock climb, workout and play the occasional game
          with friends.
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          Some of my proficiencies are listed below
        </motion.p>
      </motion.div>
      <Skills />
    </Section>
  );
}

export default About;
