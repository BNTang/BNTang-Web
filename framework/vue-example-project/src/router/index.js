import Vue from 'vue';
// import the VueRouter library
import VueRouter from 'vue-router';
// import the ExampleComponent
import ExampleComponent from "@/example/字符串模板/渲染ElementComponent-失败/ExampleComponent";

// import the ExampleComponent
import MapExampleComponent from "@/example/地图/MapBox嵌入GeoServer地图/ExampleComponent";
import MapExampleComponentCad from "@/example/地图/MapBox嵌入CAD/ExampleComponent";
// import the Example
import Example from "../components/Example/Example";

// import the Container
import Container from "../components/Container/Container";

// import the Home
import Home from "../App";

// create a new VueRouter instance
const routes = [
    {
        // set the URL path for the route
        path: '/',
        // set the name for the route
        name: 'Home',
        // set the component to render for the route
        component: Home
    },
    {
        path: '/exampleComponent',
        name: 'exampleComponent',
        component: ExampleComponent
    },
    {
        path: '/example',
        name: 'example',
        component: Example
    },
    {
        path: '/mapBoxExample',
        name: 'mapBoxExample',
        component: MapExampleComponent
    },
    {
        path: '/container',
        name: 'container',
        component: Container
    },
    {
        path: '/mapExampleComponentCad',
        name: 'mapExampleComponentCad',
        component: MapExampleComponentCad
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

export default router;
