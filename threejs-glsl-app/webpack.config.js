// Generated using webpack-cli https://github.com/webpack/webpack-cli

const {existsSync} = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.js',
  resolve: {
    // https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353
    alias: {
      '@/plugins': path.resolve(__dirname, './src/plugins/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
    onBeforeSetupMiddleware: (app, server, compiler) => {
      const fileExist = existsSync('./src/setupProxyx.js');
      if (fileExist) {
        const pathProxy = path.resolve(process.cwd(), 'src/setupProxy');
        return require(`${pathProxy}`)(app);
      }
    },
    host: require('os').networkInterfaces().eth0[0].address,
    port: process.env.PORT || 3000,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        loader: 'shader-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp3|wav)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
  }
  return config;
};
