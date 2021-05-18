const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    optimizeCss: true,
  },
  future: {
    webpack5: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permission-Policy',
            value: 'interest-cohort=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
        ],
      },
    ];
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
