import Card from "../../SharedComponents/Card";
import Image from "next/image";
import Website from "../../Icons/Website";
import Linkedin from "../../Icons/Linkedin";
import Github from "../../Icons/Github";
import { motion } from "framer-motion";
import { dragSpring, spring } from "../../../styles/transitions";
import { useState } from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

interface Props {
  index?: number;
  name: string;
  imageURL: string;
  websiteURL: string;
  githubURL: string;
  linkedinURL: string;
  alreadyDragging: boolean;
  // eslint-disable-next-line no-unused-vars
  setAlreadyDragging: (alreadyDragging: boolean) => void;
}

export default function MemberCard({
  index = 0,
  name,
  imageURL,
  websiteURL,
  githubURL,
  linkedinURL,
  alreadyDragging,
  setAlreadyDragging,
}: Props) {
  //#region Hooks
  const isMobile = useMediaQuery("(max-width: 600px)");
  //#endregion
  const [draggingCard, setDraggingCard] = useState(false);

  const clickableLinks = [websiteURL, githubURL, linkedinURL].filter(
    (url) => url !== ""
  );
  const clickableLinkClassName =
    "w-10 fill-text-secondary hover:fill-text-primary transition-fill duration-200 ease-in-out";

  return (
    <motion.div
      drag={(!alreadyDragging || draggingCard) && !isMobile}
      dragSnapToOrigin
      dragTransition={dragSpring}
      layout={!draggingCard} // Only do layout animations when not dragging
      transition={spring}
      whileDrag={{
        scale: 1.1,
        cursor: "grabbing",
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        zIndex: draggingCard ? 1 : 0,
        y: 0,
        transition: { ...spring, delay: 0.4 + index * 0.05 },
      }}
      custom={0.4 + index * 0.05} // Added 0.4 offset to wait for the previous page sections to transition
      onDragStart={() => {
        setAlreadyDragging(true);
        setDraggingCard(true);
      }}
      onDragEnd={() => {
        setDraggingCard(false);
      }}
      onDragTransitionEnd={() => {
        setAlreadyDragging(false);
      }}
    >
      <Card
        className={
          "max-w-10 bg-background-dark-transparent shadow-strong min-w-[12rem] max-w-[20rem] select-none overflow-hidden"
        }
      >
        <div
          className={
            "bg-background-darkish-transparent flex flex-row px-4 py-2"
          }
        >
          <p className="text-lg font-bold">{name}</p>
        </div>
        <div className={"flex flex-row items-center gap-4 p-4"}>
          <div className={"relative h-40 w-52"}>
            <Image
              src={imageURL}
              layout={"fill"}
              objectFit={"cover"}
              className={"rounded-2xl"}
              alt={"Picture of " + name}
              priority
              draggable={false}
            />
          </div>
          <div className={"flex flex-col gap-4"}>
            {clickableLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={spring}
                href={link}
                target={"_blank"}
                rel="noreferrer"
                style={{ display: "flex" }}
              >
                {link === websiteURL && (
                  <Website className={clickableLinkClassName} />
                )}
                {link === githubURL && (
                  <Github className={clickableLinkClassName} />
                )}
                {link === linkedinURL && (
                  <Linkedin className={clickableLinkClassName} />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
