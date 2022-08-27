import { motion } from "framer-motion";
import { spring } from "../../../styles/transitions";
import OpenInNew from "../../Icons/OpenInNew";

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
        "group bg-background-darkish-transparent flex flex-row items-center gap-2 rounded-full px-4 py-2 text-lg sm:text-2xl"
      }
      href={projectURL}
      target={"_blank"}
      rel="noreferrer"
      draggable={false}
    >
      <div
        className={
          "text-text-secondary group-hover:text-text-primary transition-colors duration-200 ease-in-out"
        }
      >
        {actionText}&nbsp;
        <b className={"text-text-secondary group-hover:text-primary"}>
          {projectName}
        </b>
      </div>
      <OpenInNew
        className={
          "fill-text-secondary group-hover:fill-text-primary transition-fill w-4 duration-200 ease-in-out sm:w-6"
        }
      />
    </motion.a>
  );
}
