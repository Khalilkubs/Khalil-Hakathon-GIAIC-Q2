// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React Strict Mode
    swcMinify: true, // Enables SWC-based minification (for better performance)
    images: {
      domains: ['example.com'], // Allows image optimization from external domains (add your domain)
    },
    // Add other configurations as needed
  };
  
  export default nextConfig;
  