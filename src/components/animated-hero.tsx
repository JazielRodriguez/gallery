import React from "react";
import { motion } from "framer-motion";
const AnimatedHero: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="bg-yellow-500 h-full w-full absolute z-0"
    ></motion.div>
  );
};
export default AnimatedHero;
