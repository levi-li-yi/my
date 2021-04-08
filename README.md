# zvan-ui

### package.json 中的 scripts 脚本释义

| 名称     | 执行目的                                                                                       | 核心构建文件                   |
| -------- | ---------------------------------------------------------------------------------------------- | ------------------------------ |
| serve    | vue cli                                                                                        | vue.config.js                  |
| color    | 创建调色板基础性 scss 变量文件，生成 ui/lib/styles/common/\_colors.scss                        | core/build/colors.js           |
| fix      | 修复部分第三方库 element、axios 导入性 Bug                                                     | core/build/fix.js              |
| coder    | 临时代码生成器，生成 api、mock、store、mixins、icon 文件到.my 目录                             | core/build/coder.js            |
| svg      | 生成组件库源码所需的图标文件到 ui/lib/icons                                                    | core/build/svg.js              |
| theme    | 将 el、自定义主题 scss 编译成 css 文件分别到./my/el-themes 和./my/ui-themes 中，提升运行时效率 | core/build/theme.js            |
| ready    | 启动开发环境或生产环境打包之前初始化样式文件，并自动重启代码生成器                             | core/bin/ready.js              |
| route    | 对工程项目中 src/views、routes/index.js 文件的视图部分与路由数据转化成配置信息                 | core/bin/route.js              |
| dev      | 启动组件开发服务，用于组件开发过程中代码编写、调试                                             | 综合 ready、serve、route 脚本  |
| preview  | 启动静态 express 服务，用于预览（暂时停用）                                                    | core/bin/preview.js            |
| demo     | markdown 文档生成 dvue 组件示例，至.my/demo 目录下                                             | core/build/demo-builder.js     |
| jsdoc    | 生成 JS 文档，包含：utils、components、map、charts 等                                          | core/build/jsdoc-builder.js    |
| dev:docs | 启动文档系统开发服务                                                                           | 综合 demo、jsdoc、vuepress dev |
| start    | 启动文档系统静态网站                                                                           | core/server/app.js             |
| bridge   | 将组件库类库目录： ui/lib/utils 打包到 public/assets/bridge/lib 目录中                         | core/build/bridge-builder      |
| app      | 在创建根目录下一个单独的 vue 应用                                                              | core/build/app.js              |
| page     | 向已知的 vue 应用或者根目录下的 src/views 目录下添加一个 vue 单文件                            | core/bin/page.js               |
| lint     | lint 检查                                                                                      |                                |
| docs:dev | 开发环境启动文档系统                                                                           |                                |
| serve    |                                                                                                |                                |
| serve    |                                                                                                |                                |
| serve    |                                                                                                |                                |
