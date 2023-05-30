import Vue from 'vue';
import VueRouter from 'vue-router'; // import the VueRouter library
import ExampleComponent from "../example/字符串模板/渲染ElementComponent/ExampleComponent"; // import the ExampleComponent
import Example from "../components/Example/Example"; // import the ExampleComponent
import Home from "../App"; // import the ExampleComponent

// create a new VueRouter instance
const routes = [
    {
        path: '/', // set the URL path for the route
        name: 'Home', // set the name for the route
        component: Home // set the component to render for the route
    },
    {
        path: '/exampleComponent', // set the URL path for the route
        name: 'exampleComponent', // set the name for the route
        component: ExampleComponent // set the component to render for the route
    },
    {
        path: '/example', // set the URL path for the route
        name: 'example', // set the name for the route
        component: Example // set the component to render for the route
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

export default router;
