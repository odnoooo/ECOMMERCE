/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    domains: ["res.cloudinary.com"], // Cloudinary домэйнийг нэмэх
  },
};

export default nextConfig;
