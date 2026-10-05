import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.VERCEL === '1' || process.env.VERCEL_ENV
  ? {}
  : { output: 'export' };

export default nextConfig;
