import Vue from 'vue';
import VueRouter from 'vue-router';
// 全局使用了
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:() => import('../home.vue'),
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
    let user = JSON.parse(localStorage.getItem('user'));
    if(to.fullPath == '/page2/num2'){
        if(user){
            next()
        }else{
            next('/registor')
        }
    }else{
        next()
    }
})

export default router;




