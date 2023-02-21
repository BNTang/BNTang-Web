import Vue from 'vue'
import App from './App.vue'
import {Button, Table, TableColumn, Row, Switch} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Switch);

new Vue({
    render: h => h(App),
}).$mount('#app')