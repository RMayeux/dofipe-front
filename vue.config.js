const Dotenv = require("dotenv-webpack");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
      }
    }
  },
  configureWebpack: {
    plugins: [new Dotenv()]
  }
};