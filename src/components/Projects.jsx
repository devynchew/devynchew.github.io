import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, live_demo_icon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_code,
  livedemo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Project Card section */}
      <div className="bg-[white] px-5 sm:py-7 py-5 rounded-2xl w-full flex sm:gap-8 gap-2 lg:h-[500px] lg:flex-row flex-col">
        {/* Left col */}
        <div className="w-full h-auto flex-[60%]">
          <img
            src={image}
            alt={name}
            className="w-full md:h-[400px] min-h-[250px] object-cover rounded-2xl"
          />
        </div>
        {/* Right col */}
        <div className="flex-[40%]">
          <div className="lg:pt-[15%] py-6 px-5">
            {/* Title */}
            <h3 className="font-bold text-[24px] text-[var(--blue-dark)]">
              {name}
            </h3>
            {/* Description */}
            <p className="mt-2 text-[16px] text-[var(--blue-dark)]">
              {description}
            </p>
            {/* Technologies used */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className='text-[14px] shadow-md p-2 text-[var(--blue-dark)]'>
                  {tag.name}
                </p>
              ))}
            </div>
            {/* Github and live demo */}
            <div className="pt-10 flex flex-wrap sm:gap-6 gap-4">
              {/* github */}
              <a href={github_code} target='_blank' rel='noreferrer' className="flex gap-2">
                <p className="font-bold">Code</p>
                <img src={github} className='w-[24px]'/>
              </a>
              {/* live demo */}
              <a href={livedemo} target='_blank' rel='noreferrer' className="flex gap-2">
                <p className="font-bold">Live Demo</p>
                <img src={live_demo_icon} className='w-[24px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const Projects = () => {
  return (
    <div className="mt-[10px]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>
          Projects<span className={styles.sectionFullStop}>.</span>
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[var(--blue-dark)] text-[17px] max-w-3xl leading-[30px] text-poppins"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      {/* Project card section */}
      <div className="md:mt-12 sm:mt-10 mt-6 flex flex-col md:gap-10 sm:gap-6 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "Works");
