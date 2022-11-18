/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI:
      'mongodb+srv://Emerson:7S4se46q11oLtwc8@cluster0.oflcv91.mongodb.net/Cluster0?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
