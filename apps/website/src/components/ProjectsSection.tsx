import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";
import { ViewCarousel } from "ui/icons";

import { projects } from "../models";
import { spring } from "../styles/transitions";
import { slideDirectionalVariants } from "../styles/variants";
import ProjectCard from "./ProjectsSection/ProjectCard";

export default function ProjectsSection() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  const projectIndex = wrap(0, projects.length, current);

  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenLeft"}
      animate={"visible"}
      custom={0.3}
      className="flex flex-col p-8"
    >
      <h6 className="mb-4 flex flex-row items-center gap-2 text-lg sm:text-2xl">
        <ViewCarousel className={"w-10 fill-text-primary md:w-12"} />
        Our projects
      </h6>
      <motion.div
        transition={spring}
        variants={slideDirectionalVariants}
        initial={"hiddenLeft"}
        animate={"visible"}
        custom={0.4}
        className={"self-center xl:self-start"}
      >
        <ProjectCard
          actionText={projects[projectIndex].actionText}
          projectName={projects[projectIndex].projectName}
          projectURL={projects[projectIndex].projectURL}
          imageURL={projects[projectIndex].imageURL}
          description={projects[projectIndex].description}
          technologies={projects[projectIndex].technologies}
          direction={direction}
          current={current}
          setCurrent={setCurrent}
        />
      </motion.div>
    </motion.section>
  );
}
