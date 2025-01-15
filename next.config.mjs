/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // Match image file types
        type: 'asset/resource', // Use the built-in Webpack asset loader
      });
      return config;
    },
  };
  
  export default nextConfig;
  