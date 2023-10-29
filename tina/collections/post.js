/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      label: "Publish date",
      name: "published_at",
      type: "datetime",
    },
    {
      label: "Cover",
      name: "cover",
      type: "object",
      description: "Cover image or embed",
      fields: [
        {
          label: "Image",
          name: "image_url",
          type: "image",
        },
        {
          label: "Image alt text",
          name: "image_alt",
          type: "string",
        },
        {
          label: "Embed",
          name: "embed",
          description:
            "Override image with an embed. This accepts any embed code (iframe, script, etc.)",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      description: "For SEO and previews",
      type: "string",
      label: "Excerpt",
      name: "excerpt",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
