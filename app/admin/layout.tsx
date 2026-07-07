import Image from "next/image";

import LogoutButton from "@/app/login/auth/LogoutButton";
import AdminNav, { type AdminIcon } from "./components/AdminNav";

type AdminLink = {
  href: string;
  label: string;
  icon: AdminIcon;
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: AdminLink[] = [
    { href: "/admin", label: "Dashboard", icon: "grid" },
    { href: "/admin/cars", label: "Cars", icon: "car" },
    { href: "/admin/drivers", label: "Drivers", icon: "user" },
    { href: "/admin/events", label: "Events", icon: "calendar" },
    { href: "/admin/gallery", label: "Gallery", icon: "image" },
    { href: "/admin/settings", label: "Settings", icon: "settings" },
  ];

  return (
    <div className="relative z-10 min-h-[calc(100vh-6rem)] border-t border-red-600/20 bg-black text-white">
      <div className="site-container grid gap-8 py-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-16">
        <aside className="sticky top-32 hidden h-[calc(100vh-9rem)] min-h-[640px] flex-col rounded-lg border border-red-600/20 bg-black/80 p-6 shadow-2xl shadow-red-950/20 lg:flex">
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
                <p className="text-sm font-bold">Jan Andre</p>
                <p className="text-xs font-bold text-red-500">Admin</p>
              </div>
            </div>

            <div className="p-3">
              <LogoutButton />
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          <div className="mb-8 rounded-lg border border-red-600/20 bg-zinc-950/80 p-4 lg:hidden">
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
