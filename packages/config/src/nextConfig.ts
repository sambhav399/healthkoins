import { type NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '0' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
];

const allowedImageHosts = [
  { protocol: 'https', hostname: 'healthkoins.com' },
  { protocol: 'https', hostname: '**.healthkoins.com' },
  { protocol: 'https', hostname: '**.googleusercontent.com' }
] as const;

const baseTranspilePackages = ['@healthkoins/design'] as const;

const baseNextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  devIndicators: false,
  output: 'standalone',
  allowedDevOrigins: ['192.168.1.8'],
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
} as const satisfies NextConfig;

export function nextConfig(overrides: NextConfig = {}): NextConfig {
  const { transpilePackages, images, headers, ...rest } = overrides;

  return {
    ...baseNextConfig,
    ...rest,
    agentRules: true,
    transpilePackages: [
      ...new Set([...baseTranspilePackages, ...(transpilePackages ?? [])])
    ],
    images: {
      ...baseNextConfig.images,
      ...images,
      remotePatterns: [...allowedImageHosts, ...(images?.remotePatterns ?? [])]
    },
    async headers() {
      const appHeaders = (await headers?.()) ?? [];

      return [
        {
          source: '/:path*',
          headers: securityHeaders
        },
        ...appHeaders
      ];
    }
  };
}
