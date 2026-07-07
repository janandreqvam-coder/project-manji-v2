import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        group
        overflow-hidden
        backdrop-blur-sm

        ${theme.card.radius}
        ${theme.card.border}
        ${theme.card.background}
        ${theme.card.hover}

        transition-all
        duration-500

        ${className}
      `}
    >
      {children}
    </div>
  );
}