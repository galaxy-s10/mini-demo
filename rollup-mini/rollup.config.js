import path from 'path';

export default {
  input: path.resolve(__dirname, './index.js'),
  output: {
    file: path.resolve(__dirname, './jsdist/index.js'),
    format: 'es',
  },
};
