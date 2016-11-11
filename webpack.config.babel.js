import path from 'path';
import webpack from 'webpack';

// import ExtractTextPlugin from 'extract-text-webpack-plugin';

let isProduction = process.env.NODE_ENV === 'production';

// Development asset host, asset location and build output path.
const publicHost = isProduction ? '': 'http://localhost:2992';
const rootAssetPath = './assets';
const buildOutputPath = './src/build';

let config = {
  context: path.join(__dirname, 'src'),
  debug: true,
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/prod/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'src/public',
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]']
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2|svg)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000'
      }
    ]
  }
};

if (isProduction) {
  config.devtool = 'source-map';
  config.devServer = {};
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
}

export default config;
