import Home from "~/pages/home"
import Login from "~/pages/logic"

const publicRouters = [
    {
        path: '/',
        component: Home,
        movieListsTop : true
    },
    {
        path: '/login',
        component: Login,
    },
];


export { publicRouters}