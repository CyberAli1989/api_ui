import HelloWorld from "../components/HelloWorld.vue";
import {createRouter, createWebHistory} from "vue-router";
import RegisterComponent from "../View/FrontEnd/Auth/Register/RegisterComponent.vue";
import VerifyComponent from "../View/FrontEnd/Auth/Verify/VerifyComponent.vue";

const routes = [
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    },
    {
        path: '/verify',
        name: 'verify',
        component: VerifyComponent
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})