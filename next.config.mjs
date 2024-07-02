/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async middleware() {
    return [
      {
        source: '/:path*',
        destination: '/lib/_middleware.js',
      },
    ];
  },
};

export default nextConfig;
