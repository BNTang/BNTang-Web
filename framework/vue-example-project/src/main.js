import Vue from 'vue'
import App from './App.vue'
import ElementUI from "../config/element";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

// 注册Vue Router插件
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
