import { motion } from "framer-motion";
import { OpenInNew } from "ui/icons";

import { spring } from "../../../styles/transitions";

interface Props {
  actionText: string;
  projectName: string;
  projectURL: string;
}

export default function VisitButton({
  actionText,
  projectName,
  projectURL,
}: Props) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={spring}
      className={
        "group flex flex-row items-center gap-2 rounded-full bg-background-darkish-transparent px-4 py-2 text-lg sm:text-2xl"
      }
      href={projectURL}
      target={"_blank"}
      rel="noreferrer"
      draggable={false}
    >
      <div
        className={
          "text-text-secondary transition-colors duration-200 ease-in-out group-hover:text-text-primary"
        }
      >
        {actionText}&nbsp;
        <b className={"text-text-secondary group-hover:text-primary"}>
          {projectName}
        </b>
      </div>
      <OpenInNew
        className={
          "transition-fill w-4 fill-text-secondary duration-200 ease-in-out group-hover:fill-text-primary sm:w-6"
        }
      />
    </motion.a>
  );
}
