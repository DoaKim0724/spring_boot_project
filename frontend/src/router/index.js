import Vue from "vue";
import VueRouter from "vue-router";

//Main Display
const BoardDisplay = () => import("@/components/views/board/BoardDisplay")

const mainBoard = {
    path: "/board",
    component: BoardDisplay
}

const routes = [
    {
        path: "/",
        name: "board",
        redirect: "/board",
        component: BoardDisplay,
    },
    mainBoard
]
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

export default router;