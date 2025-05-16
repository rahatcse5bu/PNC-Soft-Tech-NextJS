/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true, // Enable SWC minification for faster builds
    images: {
      domains: ['pncsoft.tech'],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false, // Remove the X-Powered-By header
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Match image file types
        type: 'asset/resource', // Use the built-in Webpack asset loader
      });
      return config;
    },
  };
  
  export default nextConfig;
  