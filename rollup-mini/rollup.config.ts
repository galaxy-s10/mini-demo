import path from 'path';

export default {
  input: path.resolve(__dirname, './index.ts'),
  output: {
    file: path.resolve(__dirname, './tsdist/index.js'),
    format: 'es',
  },
};
