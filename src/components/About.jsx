"use client"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image   height={65}
            width={65} src={icon} alt={title} className="w-16 h-16 object-contain"  priority/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"}>Introduction</p>
        <h2 className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Motivated and dedicated professional with a background in
        Chemical Engineering and experience in the pharmaceutical industry.
        Successfully transitioned from a non-tech role to pursue a career in IT
        and frontend development. Strong knowledge of HTML, CSS, JavaScript, and
        ReactJS. Seeking opportunities to leverage my technical skills and
        passion for coding to contribute to innovative projects in the tech
        industry.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
