// 文档系统侧边栏

/**
 * 排序
 * @param {*} array 
 * @returns 
 */
function sort(array) {
  array.sort((a,b) => {
    return a > b ? 1 : -1
  })
  return array
}

/**
 * 创建菜单项
 * @param {*} title 
 * @param {*} children 
 * @param {*} isSort 
 * @returns 
 */
function createMenus(title, children, isSort = true) {
  return {
    title: title,
    collapsable: true,
    children: isSort ? sort(children) : children
  }
}

// 侧边栏配置：资源指向到docs一级子目录下
module.exports = {
  '/element/': [
    createMenus('Basic', [
      'layout',
      // 'container',
      // 'color',
      // 'typography',
      // 'border',
      // 'icon',
      // 'button',
      // 'link'
    ])
  ],
  '/ui/components/': [],
  '/ui/charts/': [],
  '/ui/map/': [],
  '/ui/go/': [],
  '/ui/dv/': [],
  '/ui/pages/': [],
  '/guide/': [],
}