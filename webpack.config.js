var webpack = require('webpack');

module.exports = {
   plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons') 
   ],
   entry: [
     './public/app/app.jsx'
   ], 
   output: {
     path: __dirname + '/public',
     filename: 'bundle.js',
     publicPath: '/'
   },
   resolve: {
     extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx']
   },                                  
   module: {
     loaders: [
       { test: /\.jsx$/, loader: 'babel-loader', exclude: [/node_modules/]  }
      ]
   },                           
  devtool: 'eval'
};
