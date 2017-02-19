module.exports = {
  
  entry: "./src/app.jsx",
  
  output: {
    path: __dirname + '/dist/',
    filename: "bundle.js"
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
}
