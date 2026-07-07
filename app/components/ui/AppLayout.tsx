import SiteContainer from "./SiteContainer";

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
      className={`page-shell ${className}`}
    >
      {content}
    </div>
  );
}
