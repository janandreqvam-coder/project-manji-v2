import SiteContainer from "./SiteContainer";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
  contained?: boolean;
  className?: string;
};

export default function AppLayout({
  children,
  contained = true,
  className = "",
}: Props) {
  const content = contained ? (
    <SiteContainer>{children}</SiteContainer>
  ) : (
    children
  );

  return (
    <div
      className={`
        relative z-10 min-h-[calc(100vh-5rem)]
        ${theme.layout.top}
        ${theme.layout.bottom}
        ${className}
      `}
    >
      {content}
    </div>
  );
}
