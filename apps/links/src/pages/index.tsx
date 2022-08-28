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
        "flex flex-col overflow-hidden justify-center items-center bg-background-darker w-screen h-screen"
      }
    >
      <motion.h1
        drag
        dragSnapToOrigin
        whileDrag={{ cursor: "grabbing" }}
        className={
          "absolute w-4/5 md:w-1/2 font-bold text-center text-primary text-2xl cursor-grab z-10"
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
        className={"border-primary rounded-full"}
      />
    </div>
  );
}
