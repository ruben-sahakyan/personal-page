import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/signin',
        name: "SignIn",
        component: SignIn,
    },
    {
        path: '/signup',
        name: "SignUp",
        component: SignUp
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;