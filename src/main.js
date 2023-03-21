import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
