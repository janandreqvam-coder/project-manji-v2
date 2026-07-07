import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

      {/* Page */}
      <main
        className={`
          relative z-10
          ${theme.layout.top}
          ${theme.layout.bottom}
        `}
      >
        {children}
      </main>

    </div>
  );
}