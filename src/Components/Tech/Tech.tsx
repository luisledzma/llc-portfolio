import { motion } from "framer-motion";
import {
  backend_skills,
  frontend_skills,
  fullStack_skills,
} from "../../Constants";
import { SectionWrapper, textVariant } from "../../Utils";
import SkillsRow from "./SkillsRow/SkillsRow";

// export type TechProps = {};

const Tech = (): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center text-primary-3"
          }
        >
          What I know so far
        </p>
        <h2
          className={
            "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
          }
        >
          Technology Stack.
        </h2>
      </motion.div>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-visible"
        style={{
          transform: "scale(0.9",
        }}
      >
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {backend_skills.map((image: any, index: any) => (
            <SkillsRow
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              techName={image.skill_name}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {frontend_skills.map((image: any, index: any) => (
            <SkillsRow
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              techName={image.skill_name}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {fullStack_skills.map((image: any, index: any) => (
            <SkillsRow
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              techName={image.skill_name}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
