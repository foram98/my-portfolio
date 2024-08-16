"use client"
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  index,
  name,
  date,
  image,
  urlPath
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            fill
            sizes="100%"
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
         <Link href={urlPath} target="__black"> <h3 className="text-white font-bold text-[24px]">{name}</h3></Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <p className={`text-[14px]`}>
            {date}
          </p>

        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div id="blog" variants={textVariant()}>
        <p className={"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"}>My Blogs</p>
        <h2 className={"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Blogs.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {blogs.map((project, index) => (
          <BlogCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "");
