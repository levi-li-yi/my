// 开发环境在线切换主题配置，通过改变文件出发热更新实现组件主题更新
const utils = require('../utils')
const core = require('../index')
const fs = require('fs')

// const {logWithSpinner} = require('@vue/cli-shared-utils')

// 更换主题
module.exports = function(theme) {
    console.log('theme theme theme:', theme);
    // logWithSpinner('清空目录')
    if(theme) {
        const content = `@import "../themes/${theme}";`
        utils.writeFile(core.ProjectThemeScssFile, content)
        const elCssFile = utils.join(core.TempPath, 'el-themes', theme, 'index.css')
        const uiCssFile = utils.join(core.TempPath, 'ui-themes', theme, 'index.css')
        let cssContent = ''
        try{
            const elCss = fs.readFileSync(elCssFile, 'utf-8')
            const uiCss = fs.readFileSync(uiCssFile, 'utf-8')
            cssContent =[elCss, uiCss].join('\n')
        }catch(e){
            utils.log(e, 'error')
        }
        return content
    }
}