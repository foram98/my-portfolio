"use client"
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // const handleResumeClick = () => {
  //   console.log("Resume clicked!"); // Add this log to check if the click event is fired.
  // };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* le */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
            Hi, We&apos;re<span className="text-[#915eff]">Web Developers</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] my-2 `}>
            We develop Frontend Web Application.
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* for scrolling animation in hero section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
