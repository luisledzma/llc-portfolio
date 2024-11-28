import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Tilt } from "react-tilt";

export type SkillsRowProps = {
  src: string;
  width: number;
  height: number;
  index: number;
  techName: string;
};

const SkillsRow = ({
  src,
  width,
  height,
  index,
  techName,
}: SkillsRowProps): JSX.Element => {
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useState, useRef, useContext, etc.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [showTooltip, setShowTooltip] = useState(false);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Misc Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Callback methods
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Component's render method
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Tilt>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: "relative",
          display: "inline-block",
          //boxShadow: "0px 200px 100px 15px #211e35", // Add shadow here
          //borderRadius: "100px",
        }}
      >
        <img src={src} width={width} height={height} alt="skill" />
        {showTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: "110%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "0.8rem",
              whiteSpace: "nowrap",
              zIndex: 10,
            }}
          >
            {techName}
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

export default SkillsRow;
