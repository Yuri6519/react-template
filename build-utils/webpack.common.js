const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        include: /src.assets.icons/,
        use: [
          {
            loader: '@svgr/webpack',
            
            // лечим svg без viewbox
            options: {
              template: (
                { template },
                opts,
                { imports, componentName, props, jsx, exports }
              ) => template.ast`
                ${imports}
                import useWithViewbox from '../../utils/useWithViewbox';
                const ${componentName} = (${props}) => {
                  const ref = React.useRef();
                  useWithViewbox(ref);
                  props = { ...props, ref };
                  return ${jsx};
                };
                export default ${componentName};
              `,
            },
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              'modules': true
            }
          },
          'sass-loader'
        ]
      },
      {
        test:  /\.(woff|woff2)$/,
        use: ['url-loader']
      },
      {
        test:  /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]'
            }

          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack bundled JS Project',
      template: './src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
};
