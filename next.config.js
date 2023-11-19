/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
