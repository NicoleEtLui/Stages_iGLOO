
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import LiveReloadPlugin from 'webpack-livereload-plugin'
import WebpackNotifierPlugin from 'webpack-notifier'
import WatchExternalFilesPlugin from 'webpack-watch-files-plugin'
import path from 'path'
import compact from 'lodash/compact'

const PROD = !!(process.env.ENV_PROD)

const LRappendScriptTag = !!(process.env.LR)
const LRHostname = process.env.LR || 'localhost'

const extractCSS = new ExtractTextPlugin(PROD ? 'styles.min.css' : 'styles.css')
const extractTextCSS = new ExtractTextPlugin('../templates/base/css/text.css')

const context = path.join(__dirname, '/www/app')

const _extractCSS = (extracter = extractCSS) => (
  extracter.extract([
    {
      loader: 'css-loader',
      options: {
        minimize: PROD
      }
    }, {
      loader: 'postcss-loader',
      options: {
        plugins: (loader) => [
          require('lost'),
          require('autoprefixer')({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
          })
        ]
      }
    }, {
      loader: 'sass-loader',
      options: {
        includePaths: [path.join(context, 'styles')],
        sourceMap: false
      }
    }
  ])
)

let config = {
  context: context,
  entry: compact([
    './images/icons/config.font.json',
    !PROD && 'react-hot-loader/patch',
    './js/main.js'
  ]),
  output: {
    path: path.join(__dirname, '/www/assets'),
    publicPath: '/assets/',
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { interpolate: true }
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /fonts\/.*\.(woff|ttf|eot|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash].[ext]'
          }
        }
      },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['extracted-loader'].concat(_extractCSS()),
        exclude: /text\.scss/
      },
      {
        test: /text\.scss$/,
        use: ['extracted-loader'].concat(_extractCSS(extractTextCSS))
      },
      { test: /\.font\.json$/, use: ['style-loader', 'css-loader', 'fontgen-loader'] }
    ]
  },
  devtool: '#source-map',
  plugins: compact([
    !PROD && new webpack.HotModuleReplacementPlugin(),
    !PROD && new webpack.NamedModulesPlugin(),
    new WebpackNotifierPlugin(),
    new LiveReloadPlugin({
      appendScriptTag: LRappendScriptTag,
      hostname: LRHostname
    }),
    extractCSS,
    extractTextCSS,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WatchExternalFilesPlugin({
      files: [
        './www/app/**/*.cfm',
        './www/app/modules/*.html'
      ]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.PORT || 9000,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    proxy: {
      '/': 'http://localhost'
    }
  }
}

if (PROD) {
  config.devtool = false
  const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
  config.plugins.push(new UglifyJsPlugin({ minimize: true }))
}

module.exports = config
