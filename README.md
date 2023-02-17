# vue-mall

### 前端搭建

#### 1.创建项目
```shell
# 创建项目
vue init webpack vue-mall
```
> 选择vue-router,vue-router对应新建src/permission.js、src/router

#### 2.安装vuex
```shell
npm install vuex@next --save
```
> 新建 src/store src/store/index.js src/store/getter.js ./modules
```js
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store

```


#### 3.安装svg-sprite-loader
```shell
npm i svg-sprite-loader --save
```
> 配置webpack解析svg
> 新建文件夹 src/icons/svg src/icons/index.js
> 新建模版SvgIcon
```js
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: resolve('src/icons'),
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
```

```js
import Vue from "vue"
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```
```vue
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
```

#### 4.安装element-ui
```shell
 npm i element-ui -S
```
> main.js里加入
```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```

#### 5. 安装js-cookie
```shell
npm install --save js-cookie
```
> 编写cookies.getToken，方便路由跳转(permission.js)

#### 7.安装axios
```shell
npm install -S axios
```
>编写request.js，做拦截器

#### 7.安装node-sass、sass-loader
```shell
 npm  install sass-loader@7.0.1 --save-dev
 npm install node-sass@4.13.0 --sava-dev
```
>配置webpack解析scss