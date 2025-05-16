module.exports = {
    siteUrl: 'https://pncsoft.tech',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        'https://pncsoft.tech/sitemap.xml',
      ],
    },
    exclude: ['/server-sitemap.xml', '/404'],
    outDir: 'public',
    changefreq: 'weekly',
    priority: 0.7,
  };
  