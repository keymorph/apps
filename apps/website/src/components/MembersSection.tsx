import { motion } from "framer-motion";
import { Groups } from "ui/icons";

import { Member } from "../models";
import { spring } from "../styles/transitions";
import { slideDirectionalVariants } from "../styles/variants";
import MemberList from "./MembersSection/MemberList";

interface Props {
  sortedMembers: Member[];
}

export default function MembersSection({ sortedMembers }: Props) {
  return (
    <motion.section
      transition={spring}
      variants={slideDirectionalVariants}
      initial={"hiddenLeft"}
      animate={"visible"}
      custom={0.3}
      className="p-4 md:p-8"
    >
      <h6 className="mb-4 flex flex-row items-center gap-2 text-lg sm:text-2xl">
        <Groups className={"w-8 fill-text-primary md:w-12"} />
        Who are we?
      </h6>
      <MemberList sortedMembers={sortedMembers} />
    </motion.section>
  );
}
