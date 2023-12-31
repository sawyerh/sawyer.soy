import classNames from "clsx";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`.repeat(
  3,
);

export default function Page() {
  return (
    <>
      <h2 className="text-5xl">Colors</h2>

      <div>
        {[
          "bg-terracotta-50",
          "bg-terracotta-100",
          "bg-terracotta-200",
          "bg-terracotta-300",
          "bg-terracotta-400",
          "bg-terracotta-500",
          "bg-terracotta-600",
          "bg-terracotta-700",
          "bg-terracotta-800",
          "bg-terracotta-900",
          "bg-terracotta-950",
          "bg-slate-50",
          "bg-slate-100",
          "bg-slate-200",
          "bg-slate-300",
          "bg-slate-400",
          "bg-slate-500",
          "bg-slate-600",
          "bg-slate-700",
          "bg-slate-800",
          "bg-slate-900",
          "bg-slate-950",
          "bg-moss-50",
          "bg-moss-100",
          "bg-moss-200",
          "bg-moss-300",
          "bg-moss-400",
          "bg-moss-500",
          "bg-moss-600",
          "bg-moss-700",
          "bg-moss-800",
          "bg-moss-900",
          "bg-moss-950",
        ].map((color) => (
          <div
            key={color}
            className={classNames(
              `${color} m-2 inline-block aspect-square w-40`,
              {
                "text-white":
                  color.endsWith("-950") ||
                  color.endsWith("-900") ||
                  color.endsWith("-800") ||
                  color.endsWith("-700") ||
                  color.endsWith("-600") ||
                  color.endsWith("-500"),
              },
            )}
          >
            {color}
          </div>
        ))}
      </div>

      <div>
        {[
          "text-terracotta-50",
          "text-terracotta-100",
          "text-terracotta-200",
          "text-terracotta-300",
          "text-terracotta-400",
          "text-terracotta-500",
          "text-terracotta-600",
          "text-terracotta-700",
          "text-terracotta-800",
          "text-terracotta-900",
          "text-terracotta-950",
          "text-slate-50",
          "text-slate-100",
          "text-slate-200",
          "text-slate-300",
          "text-slate-400",
          "text-slate-500",
          "text-slate-600",
          "text-slate-700",
          "text-slate-800",
          "text-slate-900",
          "text-slate-950",
          "text-moss-50",
          "text-moss-100",
          "text-moss-200",
          "text-moss-300",
          "text-moss-400",
          "text-moss-500",
          "text-moss-600",
          "text-moss-700",
          "text-moss-800",
          "text-moss-900",
          "text-moss-950",
        ].map((color) => (
          <div
            key={color}
            className={classNames(`${color} font-bold`, {
              "bg-slate-950":
                color.endsWith("-50") ||
                color.endsWith("-100") ||
                color.endsWith("-200"),
            })}
          >
            {color}
          </div>
        ))}
      </div>

      <h2 className="text-5xl">Typography</h2>
      <h1>Heading 1</h1>
      <p>
        This is a paragraph with <a href="#">one link</a>,{" "}
        <a href="#">two link</a>, <a href="#">three link</a>,{" "}
        <a href="#">four link</a> and, <a href="#">five link</a>.
      </p>
      <h2>Heading 2</h2>
      <p>{lorem}</p>
      <h3>Heading 3</h3>
      <p>{lorem}</p>
      <h4>Heading 4</h4>
      <p>{lorem}</p>
      <h5>Heading 5</h5>
      <p>{lorem}</p>

      <h2 className="text-5xl">Font families</h2>
      <p className="font-marker">font-marker utility</p>
    </>
  );
}
