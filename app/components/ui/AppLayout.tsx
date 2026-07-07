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
      className={`
        relative z-10 min-h-[calc(100vh-5rem)]
        pt-20
        pb-24
        md:pt-24
        md:pb-32
        ${className}
      `}
    >
      {content}
    </div>
  );
}
