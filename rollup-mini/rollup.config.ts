import path from 'path';
import { defineConfig } from 'rollup';
export default defineConfig([
  // {
  //   input: path.resolve(__dirname, './index.ts'),
  //   output: {
  //     file: path.resolve(__dirname, './tsdist/index.mjs'),
  //     format: 'es',
  //   },
  // },
  {
    input: path.resolve(__dirname, './index.ts'),
    output: {
      file: path.resolve(__dirname, './tsdist/index.cjs'),
      format: 'cjs',
      // exports: 'named',
      // exports: 'none',
      // exports: 'default',
      exports: 'auto',
    },
  },
]);
