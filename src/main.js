import Vue from 'vue'
import App from './App.vue'

import routerConfig from './config/router.config'
import vueConfig from './config/vue.config';
import components from './config/components.config'


// 各类配置
vueConfig.init();
components.init();

//样式表
import './assets/sass/index.scss';

const router = routerConfig.initRouter();
const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

console.debug('vue初始化完成。路由页面数量', app.$router.options.routes.length);
