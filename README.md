# vue-cli-plugin-lodash
[![NPM](https://img.shields.io/npm/v/vue-cli-plugin-lodash.svg)](https://www.npmjs.com/package/vue-cli-plugin-lodash)

基于Vue CLI 3 的lodash插件，自动配置`babel-plugin-lodash`插件和`lodash-webpack-plugin`以达到最小的压缩效果，支持`ProvidePlugin`，项目无需引入(开启`ProvidePlugin`则无法按需引入)

### 安装
```bash
vue add lodash
```

### 使用

```javascript
import _ from "lodash"

_.chunk(['a', 'b', 'c', 'd'], 2);
```
> 如果开启`ProvidePlugin`则无需import

### 配置
```javascript
// vue.config.js
module.exports = {
    pluginOptions: {
        lodash: {
            // 是否开启ProvidePlugin, 默认false
            provide: false
        }
    }
}

```

### 对比
| 普通引入 | vue-cli-plugin-lodash |
| :----: |:-----:|
| ![image](https://user-images.githubusercontent.com/20091279/83642021-e1562d00-a5e0-11ea-9d28-a1817781d85c.png) | ![image](https://user-images.githubusercontent.com/20091279/83641894-b966c980-a5e0-11ea-9353-54d3cac32e03.png) |
