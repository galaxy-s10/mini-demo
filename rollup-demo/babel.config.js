const pkg = require('./package.json');

const babelRuntimeVersion = pkg.dependencies['@babel/runtime-corejs3'].replace(
  /^[^0-9]*/,
  ''
);

console.log('读取了babel');

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      /**
       * @babel/plugin-transform-runtime
       * useBuiltIns和polyfill选项在 v7 中被删除，只是将其设为默认值。
       */
      '@babel/plugin-transform-runtime',
      {
        // absoluteRuntime: false, // boolean或者string，默认为false。

        /**
         * corejs:false, 2,3或{ version: 2 | 3, proposals: boolean }, 默认为false
         * 设置对应值需要安装对应的包：
         * false	npm install --save @babel/runtime
         * 2	npm install --save @babel/runtime-corejs2
         * 3	npm install --save @babel/runtime-corejs3
         */
        corejs: 2,

        /**
         * helpers: boolean, 默认true。在纯babel的情况下：
         * 如果是true，就会把需要他runtime包给引进来，如：import _defineProperty from "@babel/runtime/helpers/defineProperty"
         * 如果是false，就会把需要的runtime包里面的代码给嵌进bundle里，如function _defineProperty(){}
         * 设置false的话，会导致同一个runtime包里面的代码被很多文件设置，产生冗余的代码。而且因为虽然是同一
         * 份runtime包里面的代码，但是他们在不同的文件（模块）里面，都有自己的作用域，因此在使用类似webpack之类的
         * 打包工具打包的时候，不会做优化。因此推荐设置true，这样可以通过静态分析的手段进行打包，减少打包后的代码体积。
         */
        // helpers: true, // 当helpers设置true的时候，babelHelpers需要设置为runtime
        helpers: false, // 当helpers设置false的时候，babelHelpers需要设置为bundled
        // regenerator: true, // 切换生成器函数是否转换为使用不污染全局范围的再生器运行时。默认为true
        // version: babelRuntimeVersion,
      },
    ],
    ['./myplugin', { a: 2 }],
  ],
};
