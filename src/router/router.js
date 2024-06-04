import HelloWorld from "../components/HelloWorld.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: HelloWorld
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})