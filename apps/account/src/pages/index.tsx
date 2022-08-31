import { useSession } from "next-auth/react";

export default function Index() {
  const { data } = useSession();

  console.log(data);

  return (
    <div
      className={
        "flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background-darker"
      }
    >
      <h1
        className={"absolute text-center text-2xl font-bold text-primary-light"}
      >
        Soon™
      </h1>
    </div>
  );
}
