import { defineConfig } from 'tsdown';

export default defineConfig(({ watch }) => {
  const isProduction = !watch;

  return {
    entry: {
      nextConfig: 'src/nextConfig.ts'
    },
    outDir: 'dist',
    format: ['esm'],
    dts: true,

    minify: isProduction,
    sourcemap: !isProduction,
    clean: isProduction,

    platform: 'node',
    target: 'node24'
  };
});
