import { nextConfig } from '@healthkoins/config/nextConfig';

export default nextConfig({
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css'
      }
    }
  }
});
