export default function PostEditLink({ filename }: { filename: string }) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <a
      className="inline-block px-2 no-underline"
      href={`/admin/index.html#/collections/edit/post/~/${filename}`}
      title="Edit post"
    >
      ✏️
    </a>
  );
}
