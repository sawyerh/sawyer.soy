const contentful = require("contentful");

const client = contentful.createClient({
  space: "r0ntcoi638zt",
  accessToken: "qcWKRTqeznWGTGSNxYjNz1vRUvvzutWdsCU4xteGJjQ",
});

export async function getFrameworks() {
  const { items } = await client.getEntries({
    content_type: "framework",
  });

  return items;
}
