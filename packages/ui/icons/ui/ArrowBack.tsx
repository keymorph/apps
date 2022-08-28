import { IconProps } from "../type";

export default function ArrowBack({ variant, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={"-10 0 48 48"} {...props}>
      <path d="M18.6 42.6 1.05 25.05q-.25-.25-.35-.5Q.6 24.3.6 24q0-.3.1-.55.1-.25.35-.5L18.6 5.4q.55-.55 1.4-.55.85 0 1.4.55.6.6.6 1.425 0 .825-.6 1.425L5.65 24 21.4 39.75q.6.6.575 1.425-.025.825-.575 1.375-.6.6-1.425.6-.825 0-1.375-.55Z" />
    </svg>
  );
}
