/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  //   basePath: isProd ? '/jullweber/' : '',
  //   assetPrefix: isProd ? '/jullweber/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
