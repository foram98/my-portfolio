"use client"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        console.log('technology', technology)

        return <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      }

      )}
    </section>
  );
};

export default SectionWrapper(Tech, "");
