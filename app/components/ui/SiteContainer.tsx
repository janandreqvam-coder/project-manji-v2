import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SiteContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        ${theme.layout.width}
        ${theme.layout.sides}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
