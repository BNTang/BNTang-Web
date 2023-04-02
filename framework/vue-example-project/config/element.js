import {
    Button,
    Table,
    TableColumn,
    Row,
    Switch,
    Message,
    Container,
    Main,
    Header,
    Aside,
    // 其他需要引入的组件
} from 'element-ui';

export default {
    install(Vue) {
        Vue.use(Button);
        Vue.use(Row);
        Vue.use(Table);
        Vue.use(TableColumn);
        Vue.use(Switch);
        Vue.use(Message);
        Vue.use(Container);
        Vue.use(Main);
        Vue.use(Header);
        Vue.use(Aside);
        // 全局注册message
        Vue.prototype.$message = Message;
        // 其他需要使用的组件
    }
}