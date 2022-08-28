import { motion } from "framer-motion";
import { ArrowBack, ArrowForward } from "ui/icons";

import { spring } from "../../../styles/transitions";

interface Props {
  current: number;
  setCurrent: (value: [number, number]) => void;
}

export default function PrevNextControls({ current, setCurrent }: Props) {
  const paginate = (newDirection: number) => {
    setCurrent([current + newDirection, newDirection]);
  };

  const arrowStyles =
    "w-8 md:w-12 h-8 md:h-12 fill-text-secondary group-hover:fill-text-primary transition-colors duration-200 ease-in-out";

  return (
    <div className="flex flex-row items-center justify-center gap-2 md:gap-4">
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
        className={"group"}
      >
        <ArrowForward className={arrowStyles + " -rotate-180 xl:-rotate-90"} />
      </motion.button>
      <motion.button
        transition={spring}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
        className={"group"}
      >
        <ArrowBack className={arrowStyles + " rotate-180 xl:-rotate-90"} />
      </motion.button>
    </div>
  );
}
