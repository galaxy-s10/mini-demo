import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/main.js',
  // output: {
  //   format: 'cjs',
  //   file: 'dist/why.esm.js',
  // },
  output: [
    {
      format: 'esm',
      file: 'dist/why.esm.js',
    },
    {
      format: 'cjs',
      file: 'dist/why.cjs.js',
    },
    {
      format: 'amd',
      file: 'dist/why.amd.js',
    },
  ],
  plugins: [
    /**
     * 不使用@rollup/plugin-node-resolve插件的话，import {sum} 'aaa';就不会
     * 把引入的node_modules包里的aaa的sum的代码引进来，而是会原封不动的把
     * import {sum} 'aaa';放到打包的代码里面
     */
    resolve(),
    // babel({
    //   babelHelpers: 'bundled',
    // }),
    // commonjs(),
    // terser(),
  ],
};
