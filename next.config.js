const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: `${process.env.GRAPH_URL}/sitemap.xml`,
      },
      {
        source: '/sitemap:path.xml',
        destination: `${process.env.GRAPH_URL}/sitemap:path.xml`,
      },
    ];
  },
});
