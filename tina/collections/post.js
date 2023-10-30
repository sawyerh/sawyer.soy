/**
 * @type {import('tinacms').Collection['templates']}
 * @see https://tina.io/docs/editing/markdown/#providing-custom-components-for-mdx-documents
 */
const bodyFieldComponents = [
  {
    name: "MarkdownImage",
    label: "Styled image",
    description:
      "Image component that supports custom classes for better control of styling",
    fields: [
      {
        name: "url",
        label: "Image",
        type: "image",
      },
      {
        name: "alt",
        label: "Alt text",
        type: "string",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
      },
      {
        name: "size",
        label: "Size",
        description:
          "Constrain the width of the image. By default, images span the entire width of the container.",
        type: "string",
        options: ["prose", "small", "medium"],
      },
      {
        name: "className",
        label: "CSS class names",
        description: "e.g. 'w-full opacity-50'",
        type: "string",
      },
    ],
  },
];

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
    type: "string",
    label: "External URL",
    name: "external_url",
    description: "Behavior depends on category",
  },
  {
    type: "rich-text",
    label: "Body",
    name: "body",
    isBody: true,
    templates: bodyFieldComponents,
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
  format: "mdx",
  ui: {
    filename: {
      slugify: (values) => {
        return values.title
          ?.replace(/\s/g, "-")
          .replace(/[^\w-]+/g, "")
          .toLowerCase()
          .slice(0, 200);
      },
    },
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
    defaultItem: {
      category: "Article",
      ...commonDefaultItem,
    },
  },
  fields: [...commonFields],
};
