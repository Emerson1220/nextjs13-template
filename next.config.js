/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI:
      'mongodb+srv://Emerson:xNeP7Dz7wj0mCQrL@cluster0.bkdzj6c.mongodb.net/NetxJS13?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
