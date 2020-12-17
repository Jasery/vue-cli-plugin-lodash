const defaultLodashWebpackPluginOptions = {
  shorthands: true,
  cloning: true,
  currying: true,
  caching: true,
  collections: true,
  exotics: true,
  guards: true,
  metadata: true,
  deburring: true,
  unicode: true,
  chaining: true,
  memoizing: true,
  coercions:true,
  flattening: true,
  paths:true,
  placeholders: true
}

module.exports = (api, projectOptions) => {
  let lodashPluginOptions = {}
  if (projectOptions.pluginOptions && projectOptions.pluginOptions.lodash) {
    lodashPluginOptions = projectOptions.pluginOptions.lodash
  }

  let { provide, webpackPluginOptions } = lodashPluginOptions

  api.chainWebpack(webpackConfig => {

    webpackConfig.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap((options = {}) => {
        options.plugins = [...(options.plugins || []), "lodash"]
        return options
      })

    let lodashWebpackPluginOptions = Object.assign({}, webpackPluginOptions, defaultLodashWebpackPluginOptions)
    webpackConfig
      .plugin('lodash-webpack')
      .use(require('lodash-webpack-plugin'), [lodashWebpackPluginOptions])

    if (provide) {
      const { ProvidePlugin } = require('webpack')
      webpackConfig.plugin('provide')
        .use(ProvidePlugin, [{
          _: 'lodash'
        }])
    }
  })
}