import { useSession } from "next-auth/react";

export default function Index() {
  const { data } = useSession();

  console.log(data);

  return (
    <div
      className={
        "flex flex-col overflow-hidden justify-center items-center bg-background-darker w-screen h-screen"
      }
    >
      <h1
        className={"absolute font-bold text-center text-primary-light text-2xl"}
      >
        Soon™
      </h1>
    </div>
  );
}
