const Home = resolve => require(['./pages/Home.vue'], resolve)
const Login = resolve => require(['./pages/Login.vue'], resolve)
const Main = resolve => require(['./pages/Main.vue'], resolve)
const NotFound = resolve => require(['./pages/404.vue'], resolve)

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: 'HOME',
    hidden: true,
    leaf: false, // 只有一个节点
    children: [
            { path: '/main', component: Main, name: '主页', hidden: true }
    ]
  },
]
export default routes
