"use client";

import classNames from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNav(props: { className?: string }) {
  const pathname = usePathname();

  return (
    <header className={classNames(props.className, "mb-md")}>
      <nav>
        <Link
          href="/"
          className="mr-4 inline-block py-4 font-semibold no-underline"
        >
          Sawyer Hollenshead <span className="font-marker">→</span>
        </Link>
        {[
          {
            href: "/projects",
            label: "Work",
          },
          {
            href: "/blog",
            label: "Posts",
          },
        ].map(({ href, label }) => (
          <Link
            className={classNames("inline-block px-2 py-4 text-slate-700", {
              "no-underline": href === pathname,
            })}
            href={href}
            key={href}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
