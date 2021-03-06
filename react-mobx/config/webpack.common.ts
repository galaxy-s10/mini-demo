import path from 'path';

import FriendlyErrorsWebpackPlugin from '@soda/friendly-errors-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin'; // 默认情况下，这个插件会删除webpack.outout中的所有文件
import CopyWebpackPlugin from 'copy-webpack-plugin'; // 将已存在的单个文件或整个目录复制到构建目录。
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // 自动生成index.html文件(并引入打包的js)
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'; // bundle分析
import { merge } from 'webpack-merge';
import WebpackBar from 'webpackbar';

import { chalkINFO, chalkSUCCESS, emoji } from './utils/chalkTip';
import { outputStaticUrl } from './utils/outputStaticUrl';
import devConfig from './webpack.dev';
import prodConfig from './webpack.prod';

console.log(
  chalkINFO(`读取: ${__filename.slice(__dirname.length + 1)}`),
  emoji.get('white_check_mark')
);

const commonConfig = (isProduction) => ({
  entry: {
    main: {
      import: './src/main.tsx',
      // filename: 'output-[name]-bundle.js'
    },
    // main: [
    //   './src/main.js'
    // ]
    // index: {
    //   import: './src/index.js',
    //   // filename: 'output-[name]-bundle.js'
    // },
  },
  output: {
    filename: 'js/[name]-[contenthash]-bundle.js', // 入口文件打包生成后的文件的文件名
    /**
     * 入口文件中，符合条件的代码，被抽离出来后生成的文件的文件名
     * 如：动态(即异步)导入，默认不管大小，是一定会被单独抽离出来的。
     * 如果一个模块既被同步引了，又被异步引入了，不管顺序（即不管是先同步引入再异步引入，还是先异步引入在同步引入），
     * 这个模块会打包进bundle.js，而不会单独抽离出来。
     */
    chunkFilename: 'js/[name]-[contenthash:6]-bundle-chunk.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[name]-[contenthash:6].[ext]', // 静态资源生成目录（不管什么资源默认都统一生成到这里,除非单独设置了generator）
    /**
     * output的publicPath建议(或者绝大部分情况下必须)与devServer的publicPath一致。
     * 不管开发模式还是生产模式，output.publicPath都会生效，如果不设置publicPath，
     * 它默认就约等于output.publicPath:""，到时候不管开发还是生产模式，最终引入到
     * index.html的所有资源都会拼上这个路径，如果不设置output.publicPath，会有问题：
     * 比如vue的history模式下，如果不设置output.publicPath，如果路由全都是/foo,/bar,/baz这样的一级路由没有问题，
     * 因为引入的资源都是js/bundle.js，css/bundle.css等等，浏览器输入：http://localhost:8080/foo，回车访问，
     * 引入的资源就是http://localhost:8080/js/bundle.js，http://localhost:8080/css/bundle.css,没有问题
     * 但是如果有这些路由：/logManage/logList,/logManage/logList/editLog,等等超过一级的路由，就会有问题，
     * 因为没有设置output.publicPath，所以它默认就是""，此时浏览器输入：http://localhost:8080/logManage/logList，
     * 回车访问，引入的资源就是http://localhost:8080/logManage/logList/js/bundle.js，而很明显，我们
     * 的http://localhost:8080/logManage/logList/js目录下没有bundle.js这个资源（至少默认情况下是没有，除非设置了其他属性）
     * 找不到这个资源就会报错，但是这种情况的路由是很常见的，所以建议默认必须手动设置output.publicPath:"/"，这样的话，
     * 访问http://localhost:8080/logManage/logList，引入的资源就是：http://localhost:8080/js/bundle.js，就不会报错。
     * 此外，output.publicPath还可设置cdn地址。
     */
    publicPath: outputStaticUrl(),
  },
  resolve: {
    // 解析路径
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 解析扩展名
    alias: {
      // 如果不设置这个alias，webpack就会解析不到import xxx '@/xxx'中的@
      '@': path.resolve(__dirname, '../src'), // 设置路径别名
    },
  },
  resolveLoader: {
    // 用于解析webpack的loader
    modules: ['node_modules'],
  },
  cache: {
    // type: 'memory', // filesystem长缓存，如果是memory缓存的话，下次启动就没了
    type: 'filesystem', // filesystem长缓存，如果是memory缓存的话，下次启动就没了
    buildDependencies: {
      // https://webpack.js.org/configuration/cache/#cacheallowcollectingmemory
      // 建议cache.buildDependencies.config: [__filename]在您的 webpack 配置中设置以获取最新配置和所有依赖项。
      config: [__filename],
    },
  },
  module: {
    // loader执行顺序：从下往上，从右往左
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                !isProduction && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  /**
                   * you can specify a publicPath here, by default it uses publicPath in webpackOptions.output
                   * 即默认打包的css文件是webpackOptions.output的publicPath，
                   * 但在new MiniCssExtractPlugin()时候，设置了打包生成的文件在dist下面的css目录里，
                   */
                  publicPath: '../',
                },
              }
            : { loader: 'style-loader' }, // Do not use style-loader and mini-css-extract-plugin together.
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // 在css文件里面@import了其他资源，就回到上一个loader，在上一个loader那里重新解析@import里的资源
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]', // https://webpack.js.org/loaders/css-loader/#localidentname
              }, // css模块化
            },
          },
          'postcss-loader', // 默认会自动找postcss.config.js
        ],
        sideEffects: true, // 告诉webpack是有副作用的，不对css进行删除
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          isProduction
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                },
              }
            : { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          { loader: 'sass-loader' },
        ],
        sideEffects: true,
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[contenthash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中
          },
        },
      },
      {
        // test: /\.(svg|eot|ttf|woff2?)\??.*$/,
        test: /\.(svg|eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]-[contenthash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    isProduction && new CleanWebpackPlugin(), // 这插件不能放在webpack.prod.js的plugins里，否则的话它不生效，可能是webpack和该插件的某些钩子问题
    isProduction &&
      new MiniCssExtractPlugin({
        /**
         * 将 CSS 提取到单独的文件中
         * Options similar to the same options in webpackOptions.output
         * all options are optional
         */
        filename: 'css/[name]-[contenthash:6].css',
        chunkFilename: 'css/[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
    new WebpackBar(), // 构建进度条
    new FriendlyErrorsWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      /**
       * async 为 false，同步的将错误信息反馈给 webpack，如果报错了，webpack 就会编译失败
       * async 默认为 true，异步的将错误信息反馈给 webpack，如果报错了，不影响 webpack 的编译
       */
      async: true,
      /**
       * devServer如果设置为false，则不会向 Webpack Dev Server 报告错误。
       * 但是控制台还是会打印错误。
       */
      devServer: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitError: false, // 发现的错误将始终发出，禁用设置为false.
      emitWarning: false, // 找到的警告将始终发出，禁用设置为false.
      failOnError: false, // 如果有任何错误，将导致模块构建失败，禁用设置为false
      failOnWarning: false, // 如果有任何警告，将导致模块构建失败，禁用设置为false
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        '../node_modules/.cache/.eslintcache'
      ),
    }),
    process.env.WEBPACK_ANALYZER_SWITCH &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        generateStatsFile: true,
        statsOptions: { source: false },
      }), // configuration.plugins should be one of these object { apply, … } | function
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'react-webpack-template',
      template: './public/index.html',
      hash: true,
      minify: isProduction
        ? {
            collapseWhitespace: true, // 折叠空白
            keepClosingSlash: true, // 在单标签上保留末尾斜杠
            removeComments: true, // 移除注释
            removeRedundantAttributes: true, // 移除多余的属性（如：input的type默认就是text，如果写了type="text"，就移除它，因为不写它默认也是type="text"）
            removeScriptTypeAttributes: true, // 删除script标签中type="text/javascript"
            removeStyleLinkTypeAttributes: true, // 删除style和link标签中type="text/css"
            useShortDoctype: true, // 使用html5的<!doctype html>替换掉之前的html老版本声明方式<!doctype>
            // 上面的都是production模式下默认值。
            removeEmptyAttributes: true, // 移除一些空属性，如空的id,classs,style等等，但不是空的就全删，比如<img alt />中的alt不会删。http://perfectionkills.com/experimenting-with-html-minifier/#remove_empty_or_blank_attributes

            minifyCSS: true, // 使用clean-css插件删除 CSS 中一些无用的空格、注释等。
            minifyJS: true, // 使用Terser插件优化
          }
        : false,
      chunks: ['main'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public', // 将public里面的文件
          // to: 'assets'    //复制到output.path下的assets，不写默认就是output.path根目录
          globOptions: {
            ignore: [
              // 复制到output.path时，如果output.paht已经存在重复的文件了，会报错：
              // ERROR in Conflict: Multiple assets emit different content to the same filename md.html
              '**/index.html', // 忽略from目录下的index.html，它是入口文件
            ],
          },
        },
      ],
    }),
    new DefinePlugin({
      /**
       * https://webpack.docschina.org/plugins/define-plugin/
       * DefinePlugin 允许在 编译时 将你代码中的变量替换为其他值或表达式
       * 这个DefinePlugin的作用就是定义全局变量，但它不是添加到window里（window里面找是找不到），
       * 而是这些值将内联到代码中，可以f12打开控制台在网络里面看请求的js文件（或用到了变量的文件），可以看到其实直接是把值写在了文件里了。
       * 请注意，由于本插件会直接替换文本，因此提供的值必须在字符串本身中再包含一个 实际的引号 。
       * 通常，可以使用类似 '"production"' 这样的替换引号，或者直接用 JSON.stringify('production')。
       */
      BASE_URL: `${JSON.stringify(outputStaticUrl())}`, // public下的index.html里面的icon的路径
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        REACT_APP_RELEASE_PROJECT_NAME: JSON.stringify(
          process.env.REACT_APP_RELEASE_PROJECT_NAME
        ),
        REACT_APP_RELEASE_PROJECT_ENV: JSON.stringify(
          process.env.REACT_APP_RELEASE_PROJECT_ENV
        ),
      },
    }),
  ].filter(Boolean),
});

export default (env) => {
  return new Promise((resolve) => {
    // 在npm script语句里面有 --env development，这里就可以拿得到它
    const isProduction: boolean = env.production;
    /**
     * 注意：在node环境下，给process.env这个对象添加的所有属性，都会默认转成字符串,
     * 如果给process.env.NODE_ENV = undefined，赋值的时候node会将undefined转成"undefined"再赋值
     * 即约等于：process.env.NODE_ENV = "undefined",
     * 如果是process.env.num = 123，最终就是：process.env.num = "123"。
     * 所以，尽量不要将非字符串赋值给process.env[属性名]！
     */
    // 如果是process.env.production = isProduction,这样的话，process.env.production就要么是字符串"true"，要么是字符串"undefined"
    // 改进：process.env.production = isProduction?true:false,这样的话，process.env.production就要么是字符串"true"，要么是字符串"false"
    // 这里要先判断isProduction,判断完再将字符串赋值给process.env.NODE_ENV，就万无一失了
    process.env.NODE_ENV = isProduction ? 'production' : 'development';
    // prodConfig返回的是普通对象，devConfig返回的是promise，使用Promise.resolve进行包装
    const configPromise = Promise.resolve(
      isProduction ? prodConfig : devConfig
    );
    configPromise.then((config: any) => {
      // 根据当前环境，合并配置文件
      const mergeConfig = merge(commonConfig(isProduction), config);
      console.log(chalkSUCCESS(`当前是: ${process.env.NODE_ENV}环境`));
      resolve(mergeConfig);
    });
  });
};
