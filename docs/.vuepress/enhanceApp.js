// 增强应用配置
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({Vue, options, router, siteData}) => {
  Vue.use(elementUI)
  if(typeof window !== 'undefined') require('./ui')

  import('./mock/index').then(module => {
    if(module && module.default()) {
      module.default()
    }
  }).catch(err => {
    console.log(err);
  })
}