// use
import { createApp } from 'vue';
import router from './router'


import { getRequest, postRequest, post } from './utils/request'

import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(Element3).mount('#app')

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
app.config.globalProperties.getRequest = getRequest
app.config.globalProperties.postRequest = postRequest
app.config.globalProperties.post = post
app.provide('$myGlobalVariable', 'globalVariable')







// app.use(router).mount('#app'); //.mount必须放到router之后
// app.use(router).use(antd).mount('#app'); //.mount必须放到router之后

