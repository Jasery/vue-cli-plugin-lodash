module.exports = (api, projectOptions) => {
  let lodashPluginOptions = {}
  if (projectOptions.pluginOptions && projectOptions.pluginOptions.lodash) {
    lodashPluginOptions = projectOptions.pluginOptions.lodash
  }

  let { provideEnable = true } = lodashPluginOptions

  api.chainWebpack(webpackConfig => {

    webpackConfig.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap((options = {}) => {
        options.plugins = [...(options.plugins || []), "lodash"]
        return options
      })

    webpackConfig
      .plugin('lodash-webpack')
      .use(require('lodash-webpack-plugin'), [])

    if (provideEnable) {
      const { ProvidePlugin } = require('webpack')
      webpackConfig.plugin('provide')
        .use(ProvidePlugin, [{
          _: 'lodash'
        }])
    }
  })
}