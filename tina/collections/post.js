/**
 * @type {import('tinacms').Collection['fields']}
 */
const commonFields = [
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
        description: "YouTube URL or any embed code (iframe, script, etc.)",
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
    type: "string",
    label: "Category",
    name: "category",
    options: ["Link", "Article"],
  },
  {
    type: "rich-text",
    label: "Body",
    name: "body",
    isBody: true,
  },
];

const commonDefaultItem = {
  published_at: new Date().toISOString(),
};

/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  ui: {
    filename: {
      slugify: (values) =>
        values.title?.replace(/\s+/g, "-").toLowerCase().slice(0, 200),
    },
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
  templates: [
    {
      name: "external",
      label: "External resource",
      fields: [...commonFields],
      ui: {
        defaultItem: {
          category: "Link",
          ...commonDefaultItem,
        },
      },
    },
    {
      name: "article",
      label: "Article",
      fields: [...commonFields],
      ui: {
        defaultItem: {
          category: "Article",
          ...commonDefaultItem,
        },
      },
    },
  ],
};
