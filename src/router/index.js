import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')
    //1.安装插件
Vue.use(VueRouter)
    //2.创建VueRouter对象
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/profile',
    component: Profile
}];
const router = new VueRouter({
        //配置路由和组件之间的映射关系
        routes,
        mode: 'history'
    })
    //3.导出router
export default router