"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminLink = {
  href: string;
  label: string;
  icon: string;
};

type Props = {
  links: AdminLink[];
};

export default function AdminNav({ links }: Props) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href !== "/admin" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-bold transition ${
              active
                ? "border-red-500/70 bg-red-600/20 text-white"
                : "border-transparent text-gray-300 hover:border-red-600/30 hover:bg-red-600/10 hover:text-white"
            }`}
          >
            <span className="text-lg text-red-400">
              {link.icon}
            </span>

            <span>
              {link.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
