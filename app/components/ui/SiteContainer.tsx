import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function SiteContainer({
  children,
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        ${theme.layout.width}
        ${theme.layout.sides}
      `}
    >
      {children}
    </div>
  );
}
