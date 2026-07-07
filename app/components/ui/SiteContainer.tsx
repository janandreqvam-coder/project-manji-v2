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
      className={`site-container ${className}`}
    >
      {children}
    </div>
  );
}
