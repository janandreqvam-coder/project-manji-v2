import Image from "next/image";

import LogoutButton from "@/app/login/auth/LogoutButton";
import AdminNav from "./components/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    { href: "/admin", label: "Dashboard", icon: "▦" },
    { href: "/admin/cars", label: "Cars", icon: "▣" },
    { href: "/admin/drivers", label: "Drivers", icon: "●" },
    { href: "/admin/events", label: "Events", icon: "▤" },
    { href: "/admin/gallery", label: "Gallery", icon: "▧" },
    { href: "/admin/settings", label: "Settings", icon: "⚙" },
  ];

  return (
    <div className="relative z-10 min-h-[calc(100vh-6rem)] border-t border-red-600/20 bg-black text-white">
      <div className="mx-auto flex w-full max-w-[1700px]">
        <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-64 shrink-0 flex-col border-x border-red-600/20 bg-black/70 p-6 lg:flex">
          <div>
            <Image
              src="/logos/logo.png"
              alt="Project Manji"
              width={84}
              height={84}
              className="h-20 w-20 object-contain"
              priority
            />

            <p className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-red-500">
              Admin Panel
            </p>

            <div className="mt-6">
              <AdminNav links={links} />
            </div>
          </div>

          <div className="mt-auto overflow-hidden rounded-xl border border-red-600/20 bg-zinc-950">
            <div className="flex items-center gap-3 border-b border-red-600/20 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500 text-sm font-black text-red-500">
                JA
              </div>

              <div>
                <p className="text-sm font-bold">
                  Jan Andre
                </p>

                <p className="text-xs font-bold text-red-500">
                  Admin
                </p>
              </div>
            </div>

            <div className="p-3">
              <LogoutButton />
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-6 py-10 sm:px-8 lg:px-14 lg:py-12">
          <div className="mb-8 rounded-2xl border border-red-600/20 bg-zinc-950/80 p-4 lg:hidden">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Admin Panel
            </p>

            <div className="mt-4">
              <AdminNav links={links} />
            </div>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
