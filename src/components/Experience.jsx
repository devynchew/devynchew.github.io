import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (

  <VerticalTimelineElement
  contentStyle={{background: '#E6DEDD', color: '#202046'}}
  contentArrowStyle={{
    borderRight: '7px solid #E6DEDD'
  }}
  date={experience.date}
  iconStyle={
    {background: experience.iconBg,
      boxShadow: "0 0 0 4px #202046, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
    }} 
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img 
      src={experience.icon}
      alt={experience.company_name}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
  }
  >
    <div>
      <h3 className="text-[var(--blue-dark)] text-[24px] font-bold">{experience.title}</h3>
      <p className="text-[var(--orange)] text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className='text-[var(--blue-dark)] text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience<span className={styles.sectionFullStop}>.</span></h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={"#202046"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
