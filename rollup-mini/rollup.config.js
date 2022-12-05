import path from 'path';
import { defineConfig } from 'rollup';
export default defineConfig([
  {
    input: path.resolve(__dirname, './index.ts'),
    output: {
      file: path.resolve(__dirname, './jsdist/index.mjs'),
      format: 'es',
    },
  },
  {
    input: path.resolve(__dirname, './index.ts'),
    output: {
      file: path.resolve(__dirname, './jsdist/index.cjs'),
      format: 'cjs',
    },
  },
]);
