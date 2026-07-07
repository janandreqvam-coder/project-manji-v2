"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminLink = {
  href: string;
  label: string;
  description: string;
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
            className={`block rounded-xl border px-4 py-3 transition ${
              active
                ? "border-red-500/60 bg-red-600/15 text-white"
                : "border-transparent text-gray-400 hover:border-red-600/20 hover:bg-red-600/10 hover:text-white"
            }`}
          >
            <span className="block text-sm font-bold">
              {link.label}
            </span>

            <span className="mt-1 block text-xs text-gray-500">
              {link.description}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
