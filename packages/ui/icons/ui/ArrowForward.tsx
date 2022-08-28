import { IconProps } from "../type";

export default function ChevronLeft({ variant, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 48 48"} {...props}>
      <path d="M13.8 42.45q-.55-.6-.575-1.4-.025-.8.575-1.4L29.55 23.9 13.8 8.15q-.55-.55-.575-1.375-.025-.825.575-1.425.55-.6 1.375-.625Q16 4.7 16.6 5.3l17.55 17.55q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5L16.6 42.5q-.55.55-1.375.55t-1.425-.6Z" />{" "}
    </svg>
  );
}
