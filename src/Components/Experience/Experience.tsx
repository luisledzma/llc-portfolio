import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { Experience as ExperienceType, experiences } from "../../Constants";
import { SectionWrapper, textVariant } from "../../Utils";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = (): JSX.Element => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center text-primary-3"
          }
        >
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience: ExperienceType, index: number) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
