// vue.config.js
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
// 压缩
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const productionGzipExtensions = ['js', 'css'];
// const isProduction = process.env.NODE_ENV === 'production';
// 线上打包路径，请根据项目实际线上情况
let Basepath = "/";
let vueConfig = {
  publicPath: Basepath,
  outputDir: "dist", // 打包生成的生产环境构建文件的目录
  assetsDir: "", // 放置生成的静态资源路径，默认在outputDir
  indexPath: "index.html", // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  css: {
    requireModuleExtension: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  // 优化打包
  configureWebpack: config => {
    // 服务端已经设置
    // config.plugins.push(new CompressionWebpackPlugin({
    //   algorithm: 'gzip',
    //   test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //   threshold: 10240,
    //   minRatio: 0.8
    // }))
    // config.externals = {
    //   vue: "Vue",
    //   element: "ElementUI"
    // };
  },

  devServer: {
    disableHostCheck: true,
    port: 8080,
    proxy: {
      //正式 
      //测试：
      //yq·: http://192.168.0.109:8080
      "/sugrec": {
        target: "https://www.baidu.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/sugrec": "/sugrec"
        }
      },
      "/api": {
        target: "https://www.baidu.com",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  lintOnSave: "error"
};
module.exports = vueConfig;
