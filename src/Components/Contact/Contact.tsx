import { motion } from "framer-motion";
import { SectionWrapper, textVariant } from "../../Utils";

export type ContactProps = {};

const Contact = ({}: ContactProps): JSX.Element => {
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
    <motion.div variants={textVariant()}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-primary-3">
        Get in touch with me!
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact.
      </h2>
      <div className="flex flex-col justify-center min-h-max sm:mt-[5vh] text-[#80858C]">
        <p className="mt-0.5 sm:block">{"// I'm located in Costa Rica"}</p>
        <p className="mt-2 break-all">
          <span className="text-[#9160A6]">const </span>{" "}
          <span className="text-[#66BCF2]">gitHub </span>
          <span className="text-[#66BCF2]"> = </span>
          <a
            className="text-[#9CBF78]"
            href="https://github.com/luisledzma"
            target="_blank"
          >
            `https://github.com/luisledzma`
          </a>
          <span>;</span>
        </p>
        <p className="mt-2 break-all">
          <span className="text-[#9160A6]">const </span>{" "}
          <span className="text-[#66BCF2]">linkedIn </span>
          <span className="text-[#66BCF2]"> = </span>
          <a
            className="text-[#9CBF78]"
            href="https://www.linkedin.com/in/luisledzma/"
            target="_blank"
          >
            `https://www.linkedin.com/in/luisledzma/`
          </a>
          <span>;</span>
        </p>
        <p className="mt-2 break-all">
          <span className="text-[#9160A6]">const </span>{" "}
          <span className="text-[#66BCF2]">email </span>
          <span className="text-[#66BCF2]"> = </span>
          <a className="text-[#9CBF78]" href="mailto:luisledzma@outlook.com">
            `luisledzma@outlook.com`
          </a>
          <span>;</span>
        </p>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
