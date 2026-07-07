import AppLayout from "@/app/components/ui/AppLayout";
import LogoutButton from "@/app/login/auth/LogoutButton";
import AdminNav from "./components/AdminNav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      href: "/admin",
      label: "Dashboard",
      description: "Overview and activity",
    },
    {
      href: "/admin/cars",
      label: "Cars",
      description: "Community garage",
    },
    {
      href: "/admin/drivers",
      label: "Drivers",
      description: "Member profiles",
    },
    {
      href: "/admin/events",
      label: "Events",
      description: "Calendar and signups",
    },
    {
      href: "/admin/gallery",
      label: "Gallery",
      description: "Media library",
    },
    {
      href: "/admin/settings",
      label: "Settings",
      description: "Site configuration",
    },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <aside className="w-full shrink-0 rounded-2xl border border-red-600/20 bg-zinc-950/90 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] lg:sticky lg:top-28 lg:w-72">
          <div className="mb-6 border-b border-red-600/20 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
              Project Manji
            </p>

            <h2 className="mt-3 text-2xl font-black">
              Admin CMS
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Manage content, community data, and publishing workflows.
            </p>
          </div>

          <AdminNav links={links} />

          <div className="mt-6 border-t border-red-600/20 pt-5">
            <LogoutButton />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </AppLayout>
  );
}
