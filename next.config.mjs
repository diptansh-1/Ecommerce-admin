/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/dmtiq2hbu/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
