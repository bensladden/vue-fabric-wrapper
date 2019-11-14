// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /fabric(\.min)?\.js$/,
          use: "exports-loader?fabric"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        }
      ]
    }
  }
};
