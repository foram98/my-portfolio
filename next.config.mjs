/** @type {import('next').NextConfig} */

const nextConfig = {
    swcMinify: true,
    react: {
      throwIfNamespace: false, // Disable the namespace error
    },
    images: {
      domains: ['randomuser.me'],
    },
};

export default nextConfig;
