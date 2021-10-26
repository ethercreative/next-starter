module.exports = {
  experimental: {
    optimizeCss: {
      inlineFonts: true,
      preloadFonts: true,
      fonts: true,
    },
  },
  images: {
    domains: ['project.ethr.dev', 'project.ams3.cdn.digitaloceanspaces.com'],
    minimumCacheTTL: 315360000,
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
            value: process.env.X_FRAME_OPTIONS ?? 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=315360000',
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
};
