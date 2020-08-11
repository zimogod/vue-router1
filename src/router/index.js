import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * 路由加载方式:
 *  1、缓存加载: import xx from 'xxx'  
 *  2、通过ES6的import语法 懒加载 component:() => import('../home.vue'),
 *  3、通过webpack中ensure方法进行懒加载
 *    component: res => require.ensure([], () => res(require('组件路径')),'组件名')
 */

// 全局使用了
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component: res => require.ensure([], () => res(require('../home.vue')),'home'),
        // component:() => import('../home.vue'),
        // 专门用来进行一些判断条件的
        meta:{
            isTrue:true
        },
        // 设置默认路由
        redirect:'/page2',
        // 二级路由
        children:[
            // http://localhost:8080/page2/num2
            {
                path:'/page1',
                name:'page1',
                alias:'首页',
                component:() => import('../client/page/page1.vue'),
            },
            {
                path:'/page2',
                name:'page2',
                alias:'个人中心',
                component:() => import('../client/page/page2.vue'),
                redirect:'/page2/num2',
                children:[
                    {
                        path:'num1',
                        name:'num1',
                        alias:'数据1',
                        component:() => import('../client/num/num1.vue')
                    },
                    {
                        path:'num2',
                        name:'num2',
                        alias:'数据2',
                        component:() => import('../client/num/num2.vue')
                    },
                ]
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../login.vue')
    },
    {
        path:'/registor',
        name:'registor',
        component:() => import('../registor.vue')
    },
    {
        path:'*',
        name:'notFond',
        component:() => import('../notFond.vue')
    }
];

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

// 全局的 前置守卫  路由拦截
router.beforeEach((to,from,next)=>{
    // to:即将要去的组件的路由配置信息
    // from:从哪里去某个组件的路由配置信息   哪里：即将离开的组件的信息
    // next:回调函数，作用是开关：开就是放行，合闭之后阻拦你去的组件（拦截了）
    // 放行：next()   
    // 拦截 next('/拦截之后去的组件路径')

    /**
     * 从login组件去根组件 home    home组件的路径：path:'/'
     * 
     * if条件才是你的拦截操作，else必须的放行，否则造成堆栈溢出
     * 
     */
    let user = JSON.parse(localStorage.getItem('user'));
    // 第一层判断如果成功，则第一关通过
    // matched 匹配规则 是一个对象，又有数组的特点
    if(to.matched.some(res => res.meta.isTrue)){
    // 第二层判断，第二关  才能成功的去home组件
        if(user){
            // 成功之后放行  home组件
            next()
        }else{
            // 拦截到注册组件去
            next('/registor')
        }
    }else{
    // 永远后面来一个else 用来放行
        // 放行到registor组件内
        next()
    }
})
// 一般不怎么用
router.afterEach((to,from)=>{
    /**
     * 你要去其他组件，不在当前组件待着了，提示一下
     */
    if(to.fullPath == '/page2/num2'){
        alert('您确定要离开吗？')
    }
})

export default router;




