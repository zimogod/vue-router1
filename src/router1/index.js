import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'homepage',
            component:() => import('../homepage.vue')
        },
        {
            path:'/details/:info',
            name:'details',
            component:() =>import('../client/xiangqing/details.vue')

        }
    ]
})
export default router;