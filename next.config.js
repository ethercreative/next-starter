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
    return [];
  },
});
