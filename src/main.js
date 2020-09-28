// use
import { createApp } from 'vue';
import router from './router'

import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';

const app = createApp(App)




app.use(antd).use(router).mount('#app'); //.mount必须放到router之后

