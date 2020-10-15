import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)
    //2.创建VueRouter对象
const routes = [];
const router = new VueRouter({
        //配置路由和组件之间的映射关系
        routes
    })
    //3.导出router
export default router