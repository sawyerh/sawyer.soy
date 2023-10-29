import { BlogPost } from "tina/helpers";

export default function Cover(props: {
  className?: string;
  image_url?: BlogPost["cover"]["image_url"];
  image_alt?: BlogPost["cover"]["image_alt"];
  embed?: BlogPost["cover"]["embed"];
}) {
  if (props.embed) {
    return (
      <div
        className={props.className}
        dangerouslySetInnerHTML={{
          __html: props.embed,
        }}
      />
    );
  }

  if (props.image_url) {
    return (
      <div className={props.className}>
        <img src={props.image_url} alt={props.image_alt ?? undefined} />
      </div>
    );
  }
}
