import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Index() {
  //#region Hooks

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_APP_URL &&
      window.location.origin !== process.env.NEXT_PUBLIC_APP_URL
    ) {
      window.location.href = process.env.NEXT_PUBLIC_APP_URL;
    }
  }, []);

  //#endregion

  return (
    <div
      className={
        "flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background-darker"
      }
    >
      <motion.h1
        drag
        dragSnapToOrigin
        whileDrag={{ cursor: "grabbing" }}
        className={
          "absolute z-10 w-4/5 cursor-grab text-center text-2xl font-bold text-primary md:w-1/2"
        }
      >
        Nothing to see here.
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{
          opacity: [0, 1, 0, 1, 0],
          borderWidth: [0, 8, 0, 8, 0],
          height: ["4rem", "8rem", "4rem", "8rem", "4rem"],
          width: ["16rem", "20rem", "16rem", "20rem", "16rem"],
          transition: {
            duration: 1,
          },
        }}
        className={"rounded-full border-primary"}
      />
    </div>
  );
}
