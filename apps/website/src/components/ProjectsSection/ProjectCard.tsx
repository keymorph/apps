import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Info } from "ui/icons";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { dragSpring, spring, springShort } from "../../styles/transitions";
import {
  projectCardPrevNextVariants,
  slideDirectionalVariants,
} from "../../styles/variants";
import Card from "../SharedComponents/Card";
import PrevNextControls from "./ProjectCard/PrevNextControls";
import VisitButton from "./ProjectCard/VisitButton";

interface Props {
  actionText: string;
  projectName: string;
  projectURL: string;
  imageURL: string;
  description: string;
  technologies: string[];
  direction: number;
  current: number;
  setCurrent: (value: [number, number]) => void;
}

export default function ProjectCard({
  actionText,
  projectName,
  projectURL,
  imageURL,
  description,
  technologies,
  direction,
  current,
  setCurrent,
}: Props) {
  //#region Hooks
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  //#endregion

  let [initialDirection, exitDirection, initialContentDirection] = ["", "", ""];

  if (isDesktop) {
    initialDirection = "hiddenY";
    exitDirection = "exitY";
    initialContentDirection = direction > 0 ? "hiddenUp" : "hiddenDown";
  } else {
    initialDirection = "hiddenX";
    exitDirection = "exitX";
    initialContentDirection = direction > 0 ? "hiddenLeft" : "hiddenRight";
  }
  const technologiesChips = technologies.map((technology, index) => {
    // Calculates the offset for a normal or reversed stagger based on the direction
    const staggerOffset =
      (direction > 0 ? index : technologies.length - index) * 0.05;

    return (
      <motion.div
        key={index}
        drag
        dragSnapToOrigin
        dragTransition={dragSpring}
        whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 1 }}
        transition={spring}
        variants={slideDirectionalVariants}
        initial={initialContentDirection}
        animate={"visible"}
        custom={(direction > 0 ? 0.15 : 0) + staggerOffset}
        className={
          "w-max self-center rounded-full bg-background-darkish-transparent p-2 text-center text-sm text-text-primary md:text-lg"
        }
      >
        <h6>{technology}</h6>
      </motion.div>
    );
  });

  return (
    <AnimatePresence custom={direction} mode={"wait"}>
      <motion.div
        // By passing an absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
        // detect it as an entirely new element.
        key={current}
        transition={springShort}
        variants={projectCardPrevNextVariants}
        custom={direction}
        initial={initialDirection}
        animate={"visible"}
        exit={exitDirection}
      >
        <Card
          className={
            "w-full max-w-[32rem] select-none overflow-hidden bg-background-dark-transparent shadow-strong sm:min-w-[32rem]"
          }
        >
          <div className={"relative flex flex-row justify-between p-4"}>
            <motion.div
              initial={initialContentDirection}
              animate={"visible"}
              custom={direction > 0 ? 0 : 0.15}
              variants={slideDirectionalVariants}
            >
              <VisitButton
                actionText={actionText}
                projectName={projectName}
                projectURL={projectURL}
              />
            </motion.div>
            <PrevNextControls current={current} setCurrent={setCurrent} />
          </div>
          <motion.div
            initial={initialContentDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.05 : 0.1}
            variants={slideDirectionalVariants}
            className={"relative h-[55vw] w-full sm:h-[21.5rem]"}
          >
            <Image
              src={imageURL}
              alt={"Note taking web application"}
              layout={"fill"}
              objectFit={"cover"}
              priority
              className={"pointer-events-none"}
            />
          </motion.div>
          <motion.p
            initial={initialContentDirection}
            animate={"visible"}
            custom={direction > 0 ? 0.1 : 0.05}
            variants={slideDirectionalVariants}
            className={"text-md p-4 text-center md:text-lg lg:text-xl"}
          >
            <Info
              variant={"filled"}
              className={
                "mr-2 inline-block w-5 fill-text-primary md:mr-4 md:w-6"
              }
            />
            {description}
          </motion.p>
          <div
            className={"flex flex-row flex-wrap justify-center gap-4 p-4 pt-2"}
          >
            {technologiesChips}
          </div>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
