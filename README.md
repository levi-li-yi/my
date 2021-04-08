# my-ui

### package.json 中的 scripts 脚本释义

| 名称     | 执行目的                                                                                       | 相关构建资源文件     |
| -------- | ---------------------------------------------------------------------------------------------- | -------------------- |
| serve    | vue cli                                                                                        | vue.config.js        |
| color    | 创建调色板基础性 scss 变量文件，生成 ui/lib/styles/common/\_colors.scss                        | core/build/colors.js |
| fix      | 修复部分第三方库 element、axios                                                                | core/build/fix.js    |
| coder    | 临时代码生成器，生成 api、mock、store、mixins、icon 文件到.my 目录                             | core/build/coder.js  |
| svg      | 生成组件库源码所需的图标文件到 ui/lib/icons                                                    | core/build/svg.js    |
| theme    | 将 el、自定义主题 scss 编译成 css 文件分别到./my/el-themes 和./my/ui-themes 中，提升运行时效率 | core/build/theme.js  |
| ready    | 启动开发环境或生产环境打包之前初始化样式文件，并自动重启代码生成器                             | core/bin/ready.js    |
| route    |                                                                                                |                      |
| dev      |                                                                                                |                      |
| preview  |                                                                                                |                      |
| demo     |                                                                                                |                      |
| jsdoc    |                                                                                                |                      |
| dev:docs |                                                                                                |                      |
| start    |                                                                                                |                      |
| bridge   |                                                                                                |                      |
| app      |                                                                                                |                      |
| page     |                                                                                                |                      |
| lint     |                                                                                                |                      |
| docs:dev | 开发环境启动文档系统                                                                           |                      |
| serve    |                                                                                                |                      |
| serve    |                                                                                                |                      |
| serve    |                                                                                                |                      |
