import Link from "next/link";
import AppLayout from "@/app/components/ui/AppLayout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: "/admin", label: "🏠 Dashboard" },
    { href: "/admin/cars", label: "🚗 Cars" },
    { href: "/admin/drivers", label: "👤 Drivers" },
    { href: "/admin/events", label: "📅 Events" },
    { href: "/admin/gallery", label: "📸 Gallery" },
    { href: "/admin/settings", label: "⚙️ Settings" },
  ];

  return (
    <AppLayout>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">

        <aside className="w-full shrink-0 rounded-3xl border border-red-600/20 bg-zinc-900/80 p-6 lg:sticky lg:top-28 lg:w-72 lg:p-8">

          <h2 className="mb-8 text-3xl font-black text-red-500">
            Admin
          </h2>

          <nav className="grid gap-3 sm:grid-cols-2 lg:block lg:space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 transition hover:bg-red-600/20 hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </aside>

        <div className="min-w-0 flex-1">
          {children}
        </div>

      </div>

    </AppLayout>
  );
}
