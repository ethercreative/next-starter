/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'project.ethr.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'project.ams3.cdn.digitaloceanspaces.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 315360000,
  },
  headers() {
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
            key: 'X-XSS-Protection',
            value: '1',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.ADMIN_URL,
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
  redirects() {
    return [];
  },
  rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: `${process.env.ADMIN_URL}/sitemap.xml`,
      },
      {
        source: '/sitemap:path.xml',
        destination: `${process.env.ADMIN_URL}/sitemap:path.xml`,
      },
      {
        source: '/robots.txt',
        destination: `${process.env.ADMIN_URL}/robots.txt`,
      },
    ];
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
