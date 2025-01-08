import Home from "~/pages/home"
import Login from "~/pages/logic"
import { movie } from "~/pages/movieDetail";

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
    {
        path: '/movie',
        component: movie,
        movieListsTop : true
    }
];


export { publicRouters}