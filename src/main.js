// use
import { createApp } from 'vue';
import router from './router'

import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

const app = createApp(App)

import requireContext from 'rollup-plugin-require-context';




// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './components/common',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /V[A-Z]\w+\.(vue|js)$/
// )

// const requireAll = requireContext => requireContext.keys().map(requireContext)

// console.log(requireAll('./components/common'), 26)

// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置
//   const componentConfig = requireComponent(fileName)

//   // 获取组件的 PascalCase 命名
//   const componentName = upperFirst(
//     camelCase(
//       // 获取和目录深度无关的文件名
//       fileName
//         .split('/')
//         .pop()
//         .replace(/\.\w+$/, '')
//     )
//   )

//   console.log(componentName)

//   // 全局注册组件
//   app.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })


//vue全局属性，全局方法，global prototype
// 方法1 mode1
// app.provide('myGlobalVariable', 'test')
// In the descendant component
// export default {
//   inject: ['myGlobalVariable']
// }

// 方法2 mode2
// mode2
app.config.globalProperties.$myGlobalVariable = 'globalVariable'
app.provide('$myGlobalVariable', 'globalVariable')







app.use(router).use(antd).mount('#app'); //.mount必须放到router之后

