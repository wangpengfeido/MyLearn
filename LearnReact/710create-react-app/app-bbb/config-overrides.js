const path = require('path');
const extraBuildPages = require('./extra_build_pages.json');
const { override, tap, addWebpackPlugin } = require('customize-cra');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extraPagePlugins = extraBuildPages.map((pageItem) =>
  addWebpackPlugin(
    new HtmlWebpackPlugin({
      filename: pageItem.fileName,
      template: path.resolve(__dirname, './public/index_extra.html'),
      minify: false,
      templateParameters: {
        PUBLIC_PATH_HTML: pageItem.publicPath,
        // PUBLIC_PATH_HTML: './',
        PUBLIC_PATH_INNER: pageItem.publicPath,
      },
      publicPath: pageItem.publicPath,
      //   publicPath: './',
    })
  )
);

module.exports = override(...extraPagePlugins);

//   tap({ dest: 'customize-cra.json' }),
//   function (config) {
//     console.log(config);
//     return config;
//   }
