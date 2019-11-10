// vue.config.js
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /fabric(\.min)?\.js$/,
          use: "exports-loader?fabric"
        }
      ]
    }
  }
};
