import classNames from "classnames";
import Link from "next/link";

export function HeaderNav(props: { className?: string }) {
  const showNav = process.env.NODE_ENV === "development";

  return (
    <header className={classNames(props.className, "mb-md")}>
      <nav>
        <Link
          href="/"
          className="mr-4 inline-block py-4 font-semibold no-underline"
        >
          Sawyer Hollenshead {showNav && <span className="font-marker">→</span>}
        </Link>
        {showNav &&
          [
            {
              href: "/blog",
              label: "Posts",
            },
          ].map(({ href, label }) => (
            <Link
              className="inline-block px-2 py-4 text-slate-700"
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
