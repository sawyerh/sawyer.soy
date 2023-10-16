const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`.repeat(
  3,
);

export default function Page() {
  return (
    <>
      <h2 className="text-5xl">Colors</h2>

      <div className="flex">
        {[
          "bg-intl-orange",
          "bg-terracotta",
          "bg-peach",
          "bg-yellow",
          "bg-yellow-light",
          "bg-forrest",
          "bg-slate",
          "bg-slate-light",
        ].map((color) => (
          <div key={color} className={`${color} m-2 aspect-square w-40`}>
            {color}
          </div>
        ))}
      </div>

      <div className="flex">
        {[
          "text-intl-orange",
          "text-terracotta",
          "text-peach",
          "text-yellow",
          "text-yellow-light",
          "text-forrest",
          "text-slate",
          "text-slate-light",
        ].map((color) => (
          <div
            key={color}
            className={`${color} m-2 aspect-square w-40 font-bold`}
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
