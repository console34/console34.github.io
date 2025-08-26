import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  optimizeDeps: {
    include: ['framer-motion'],
  },
  ssr: {
    noExternal: ['framer-motion'],
  },
});
