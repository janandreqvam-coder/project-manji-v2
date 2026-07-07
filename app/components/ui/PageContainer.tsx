type Props = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

      {/* Main content */}
      <section className="relative mx-auto w-full max-w-7xl px-10 pt-48 pb-24">
        {children}
      </section>

    </div>
  );
}