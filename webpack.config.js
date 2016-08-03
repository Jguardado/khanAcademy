module.exports = {
  //entry point for bundling
  entry: [
    './index.js',
  ],

  //the output path and filename
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  //babel-loader for use with jsx and es2015, does not transpile the node_modules folder
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  watch: true,
};
