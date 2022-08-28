import { IconProps } from "../type";

export default function OpenInNew({ variant, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 48 48"} {...props}>
      <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h12.45q.65 0 1.075.425.425.425.425 1.075 0 .65-.425 1.075Q22.1 9 21.45 9H9v30h30V26.55q0-.65.425-1.075.425-.425 1.075-.425.65 0 1.075.425Q42 25.9 42 26.55V39q0 1.2-.9 2.1-.9.9-2.1.9Zm9.05-12.05q-.4-.45-.425-1.05-.025-.6.425-1.05L36.9 9h-9.45q-.65 0-1.075-.425-.425-.425-.425-1.075 0-.65.425-1.075Q26.8 6 27.45 6H40.5q.65 0 1.075.425Q42 6.85 42 7.5v13.05q0 .65-.425 1.075-.425.425-1.075.425-.65 0-1.075-.425Q39 21.2 39 20.55v-9.4L20.15 30q-.4.4-1.025.4-.625 0-1.075-.45Z" />
    </svg>
  );
}