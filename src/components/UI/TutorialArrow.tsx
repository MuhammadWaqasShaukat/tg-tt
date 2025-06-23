import React, { HTMLAttributes } from "react";
import { motion } from "framer-motion";
interface TutorialArrowProps extends HTMLAttributes<HTMLDivElement> {}

const TutorialArrow: React.FC<TutorialArrowProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-[17.39vw] aspect-square max-h-[72px] max-w-[72px] absolute z-50 ${className}`}
    >
      <motion.div
        className="relative"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`w-[17.39vw] aspect-square max-h-[72px] max-w-[72px] bg bg-img-tutorial-arrow absolute`}
        ></div>
      </motion.div>
    </div>
  );
};

export default TutorialArrow;
