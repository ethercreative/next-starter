const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: `${process.env.ADMIN_URL}/sitemap.xml`,
      },
      {
        source: '/sitemap:path.xml',
        destination: `${process.env.ADMIN_URL}/sitemap:path.xml`,
      },
    ];
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
