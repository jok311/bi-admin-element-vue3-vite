// use
import { createApp } from 'vue';
import router from './router'

import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

const app = createApp(App)


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







app.use(antd).use(router).mount('#app'); //.mount必须放到router之后

