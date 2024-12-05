import { motion } from "framer-motion";
import { Laptop } from "../../Assets";
import { TypedEffect } from "../../Utils";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
// export type HeroProps = {};

const Hero = (): JSX.Element => {
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
    <section className="relative w-full h-screen mx-auto">
      <div
        className={
          "sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"
        }
      >
        {/* <div className="flex flex-col justify-center items-center mt-5 sm:hidden">
          <div className="w-[100px] h-[100px]">
            <img src={planet} alt="planet" />
          </div>
        </div> */}
        <div>
          <h1
            className={
              "font-black lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[80px] mt-2"
            }
          >
            Hi, I&apos;m <span className="text-primary-3">Luis </span>
          </h1>
          <TypedEffect
            strings={["> React enthusiast", "> Next.js expert"]}
            typeSpeed={80}
            backSpeed={80}
            loop
            className={`text-[#66BCF2] text-xl sm:text-2xl mt-2`}
            style={{ fontFamily: '"Fira Code", monospace' }}
          />
          <br />
          <div className="flex flex-col justify-center min-h-max sm:mt-[5vh] text-[#80858C]">
            <p className="mt-0.5 sm:block">{"// Who am I?"}</p>
            <p className="mt-0.5 sm:block">
              {"// A passionate Software Engineer 🌟"}
            </p>
            <p className="mt-0.5 sm:block">
              {"// Crafting elegant React solutions ⚛️"}
            </p>
            <p className="mt-0.5 sm:block">
              {"// Writing clean, scalable code 🖥️"}
            </p>
            <CodeSnippet
              text="resume"
              link="google"
              isEmail={false}
            ></CodeSnippet>
            {/* <p className="mt-2 break-all">
              <span className="text-[#9160A6]">const </span>{" "}
              <span className="text-[#66BCF2]">resume </span>
              <span className="text-[#66BCF2]"> = </span>
              <a
                className="text-[#9CBF78]"
                href="https://www.linkedin.com/in/luisledzma/"
                target="_blank"
                rel="noreferrer"
              >
                `https://www.linkedin.com/in/luisledzma/`
              </a>
              <span>;</span>
            </p> */}
          </div>
        </div>
      </div>
      <Laptop />
      <div className="absolute xs:bottom-10 bottom-21 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary-3 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
