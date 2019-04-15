import News from "../component/news/index"
import Home from "../component/home/index"
import User from "../component/user/index"
import NotFind from "../component/notfind/index"
import Newsdetail from "../component/newsdetail/index"

export default [
    {
        exact:true,
        path:'/',
        component:Home,
        children:[]
    },
    {
        path:'/news',
        component:News,
        children:[
            {
                path:'/newsdetail/:id',
                exact:true,
                component:Newsdetail
            },
            {
                path:'/',
                component:NotFind
            }
        ]
    },
    {
        path:'/user',
        component:User,
        children:[]
    },
    {
        path:'*',
        component:NotFind,
        children:[]
    }
]