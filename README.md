# nicat
多页面网站webpack配置

## 开始
* `git clone https://github.com/Jon-Millent/nicat.git`
* `yarn` or `npm install`
* `npm run watch`
* `npm run build`

## 目录

* /build/  `webpack配置 `
* /src/   
  * /script/  `js代码`
  * /scss/   `scss代码`
* /nicat.js  `配置文件`
* /www  `html js css output`

## 配置
```js
module.exports = {
  entry: [  // 入口
    {
      path: './script/app.js',
      name: 'app'
    },
    {
      path: './script/index.js',
      name: 'index'
    },
    {
      path: './script/about.js',
      name: 'about'
    }
  ],
  gzip: false // 是否开启gzip
}

```

## 实践
* 通常在`app.js`编写公用代码，在`app.scss`里面写公共样式
* 使用vue例子
   ``` 
   // app.js
   import Vue from 'vue'
   window.Vue = Vue
   ```
   
   ```js
   // webpack config
   ...
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm.js'
      }
    },
    ...
   ```
