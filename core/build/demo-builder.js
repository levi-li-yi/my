// markdown文档生成demo vue组件
const fs = require('fs')
const { logWithSpinner, stopSpinner } = require('@vue/cli-shared-utils')
const MarkdownIt = require('markdown-it')
const mdLoader = require('../loaders/docs-extend-md-loader')
const core = require('../index')
const utils = require('../utils')

const demoDir = core.DocsTempDemoPath

// 删除demo文件
function clear () {
  utils.rm(demoDir)
}

// 分析md文件，生成demo vue文件
function build () {
  logWithSpinner('构建markdown代码实例demo')
  const files = utils.getFiles(core.DocsPath)
    .filter(file => file.includes('.md'))

  const md = new MarkdownIt({
    html: true
  })

  mdLoader(md)

  files.forEach((file, index) => {
    const content = fs.readFileSync(file, 'utf-8')
    md.render(content)
    if (index >= files.length - 1) {
      stopSpinner()
    }
  })
}

module.exports = function () {
  clear()
  build()
}