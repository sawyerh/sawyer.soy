export default function FormattedDate(props: {
  className?: string;
  value?: string | null;
}) {
  if (!props.value) return null;

  const date = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(props.value));

  return <time className={props.className}>{date}</time>;
}
