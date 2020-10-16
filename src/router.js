import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component:() => import('@/views/Main.vue'),
    children:[
      {
        path: '/',
        name: 'home',
        component:() => import('@/views/Home/Home.vue')
      },
      {
        path: '/video',
        name: 'video',
        component:() => import('@/views/VideoManage/VideoManage.vue')
      },
      {
        path: '/user',
        name: 'user',
        component:() => import('@/views/UserManage/UserManage.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component:() => import('@/views/Other/PageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component:() => import('@/views/Other/PageTwo.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router