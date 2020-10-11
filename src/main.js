// use
import { createApp } from 'vue';
import router from './router'

// import antd from 'ant-design-vue'; //整体引入
import 'ant-design-vue/dist/antd.css'; 

// import 'ant-design-vue/components/style.js';
import { DatePicker, Menu } from 'ant-design-vue';

import App from './App.vue';

const app = createApp(App)






/* v1.1.3+ 自动注册Button下组件，如Button.Group */
// app.use(antd); //整体引入
app.use(DatePicker);
app.use(Menu);


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







app.use(router).mount('#app'); //.mount必须放到router之后
// app.use(router).use(antd).mount('#app'); //.mount必须放到router之后

