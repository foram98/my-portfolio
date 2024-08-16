"use client"
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";



const Resume = () => {
  const handleDownload = () => {
    // const downloadLink = document.createElement("a");
    // downloadLink.href = MyCv; // Replace with the actual path to your resume PDF
    // downloadLink.download = "bibhash-lenka.pdf"; // Replace with the actual filename of your resume
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
  };

  return (
    <motion.div id="resume" variants={textVariant()}>
      <p className={"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"}>Download CV Here</p>
      <button className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"} onClick={handleDownload}>
        Get Resume
      </button>
    </motion.div>
  );
};

export default SectionWrapper(Resume, "");
