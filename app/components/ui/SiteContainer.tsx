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
        max-w-7xl
        px-6
        sm:px-8
        lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}
