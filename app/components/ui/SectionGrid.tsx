import { theme } from "./theme";
type Props = {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
};

export default function SectionGrid({
  children,
  cols = 3,
}: Props) {
  const grid =
    cols === 2
      ? "md:grid-cols-2"
      : cols === 4
      ? "md:grid-cols-2 xl:grid-cols-4"
      : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid ${theme.layout.cardGap} ${grid}`}>
      {children}
    </div>
  );
}
