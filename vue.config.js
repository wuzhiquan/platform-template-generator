// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: './',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'internet-hospital-doctor',
    resolve: {
      alias: {
        '@': resolve('src'),
        assets: resolve('src/assets'),
        common: resolve('src/common'),
        components: resolve('src/components'),
        api: resolve('src/api'),
        store: resolve('src/store'),
      },
    },
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: 'js/[name].config.js',
      chunkFilename: 'js/[name].config.js',
    },
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: './src/common/scss/base.scss',
        })
        .end();
    });
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = '互联网医院医生端';
        return args;
      });
  },
  productionSourceMap: false,
};
