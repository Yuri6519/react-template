const webpack = require('webpack');

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
        include: /src.icons/,
        use: [
          {
            loader: '@svgr/webpack',
            
            // лечим svg без viewport
            options: {
              template: (
                { template },
                opts,
                { imports, componentName, props, jsx, exports }
              ) => template.ast`
                ${imports}
                import useWithViewbox from '../useWithViewbox';
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
      }


      // alternative => npm install react-svg-loader --save-dev
      // {
      //   loader: 'react-svg-loader',
      //   options: {
      //     jsx: true // true outputs JSX tags
      //   }
      // }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
