import { defineConfig } from 'tsdown';

export default defineConfig(({ watch }) => {
  const isProduction = !watch;

  return {
    entry: {
      index: 'src/index.ts',
      nextConfig: 'src/nextConfig.ts',
      DataTermsOfUse: 'src/DataTermsOfUse.ts',
      DataPrivacyPolicy: 'src/DataPrivacyPolicy.ts',
      DataFAQ: 'src/DataFAQ.ts'
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
