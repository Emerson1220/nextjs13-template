/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI:
      'mongodb+srv://Emerson:P&86Ckd!4Teq@sTC@cluster0.bkdzj6c.mongodb.net/NetxJS13?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
