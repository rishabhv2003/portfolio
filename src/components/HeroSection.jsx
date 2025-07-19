import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl mb-3 text-indigo-600 dark:text-indigo-500 font-bold">
          Hi, I'm Rishabh 👋
        </h1>

        <div className="text-lg md:text-2xl max-w-xl mx-auto mb-4 text-gray-700 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              "Software Developer",
              2000,
              "Backend Engineer",
              2000,
              "Automation Enthusiast",
              2000,
              "System Designer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        <p className="text-md md:text-lg max-w-xl mx-auto mb-6 text-gray-600 dark:text-gray-400">
          I design and build backend systems, automation tools, and data-driven
          services that power real-world applications. Focused on clean
          architecture, performance, and reliability.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="#works"
            className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
          >
            See Projects
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
