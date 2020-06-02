module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    devDependencies: {
      "babel-plugin-lodash": "^3.3.4",
      "lodash-webpack-plugin": "^0.11.5",
    }
  })
}