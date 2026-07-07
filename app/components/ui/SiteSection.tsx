import SiteContainer from "./SiteContainer";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SiteSection({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`${theme.layout.sectionGap} ${className}`}
    >
      <SiteContainer>
        {children}
      </SiteContainer>
    </section>
  );
}