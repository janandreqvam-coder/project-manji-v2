"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type AdminIcon =
  | "calendar"
  | "car"
  | "grid"
  | "image"
  | "settings"
  | "user";

type AdminLink = {
  href: string;
  label: string;
  icon: AdminIcon;
};

type Props = {
  links: readonly AdminLink[];
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
            <AdminIcon name={link.icon} />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function AdminIcon({ name }: { name: AdminIcon }) {
  const common = "h-5 w-5 shrink-0 text-red-400";

  if (name === "car") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 11l2-5h10l2 5M4 11h16v7H4zM7 18v2M17 18v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3v4M17 3v4M4 9h16M5 5h14v16H5z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "image") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 5h16v14H4zM8 13l3-3 3 4 2-2 4 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 8a4 4 0 100 8 4 4 0 000-8zM4 12h2M18 12h2M12 4v2M12 18v2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
