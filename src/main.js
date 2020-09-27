// import { createApp } from 'vue'
// import App from './App.vue'
// import './index.css'
// createApp(App).mount('#app')



// use
import { createApp } from 'vue';
import antd from 'ant-design-vue';
import 'ant-design-vue/components/style.js';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
createApp(App).use(antd).mount('#app');


