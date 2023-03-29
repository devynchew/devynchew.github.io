import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview<span className={styles.sectionFullStop}>.</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[var(--blue-dark)] max-w-3xl leading-[30px] text-poppins text-[17px]"
      >
        I'm a 3rd year poly student with a passion for building web applications. 
        I'm a quirky guy, and in my free time you'll find me chopping trees in my favourite sandbox MMORPG or taking pictures of my cat.
        Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
