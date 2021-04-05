// 文档系统webpack配置

const core = require('../index')

module.exports = function (chain) {
  // 自动注入elementUi组件代码
  chain.module.rule('vue')
    .use('component-loader')
    .loader(core.ComponentLoaderPath) // 'core/loaders/component-loader.js'

  // 修改babel配置文件
  chain.module.rule('js')
    .use('babel-loader')
    .tap(opt => {
      return {
        configFile: core.BabelConfigFile
      }
    })

  // 增加ui别名
  chain.resolve.alias.set('$ui', core.LibPath)

  // 增加$my别名
  chain.resolve.alias.set('$my', core.TempPath)

  // 增加src别名
  chain.resolve.alias.set('@', core.ProjectRootPath + '/src')

  // 增加$docs别名
  chain.resolve.alias.set('$docs', core.DocsPath + '/.vuepress')

  // 同时兼容core-js 2.x和core-js 3.x
  chain.resolve.alias.set('core-js/library', 'babel-runtime/node_modules/core-js/library')
  chain.resolve.alias.set('core-js/fn', 'babel-runtime/node_modules/core-js/fn')
  chain.resolve.alias.set('core-js/shim', 'babel-runtime/node_modules/core-js/shim')
  chain.resolve.alias.set('core-js/core', 'babel-runtime/node_modules/core-js/core')
  chain.resolve.alias.set('core-js/es5', 'babel-runtime/node_modules/core-js/es5')
  chain.resolve.alias.set('core-js/es6', 'babel-runtime/node_modules/core-js/es6')
  chain.resolve.alias.set('core-js/es7', 'babel-runtime/node_modules/core-js/es7')
  chain.resolve.alias.set('core-js/client', 'babel-runtime/node_modules/core-js/client')
}