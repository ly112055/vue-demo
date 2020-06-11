/* eslint-disable semi */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 解决重复点击菜单报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: () => import('../view/dashboard/dashBoard.vue'),
      children: [
        {
          path: '/order',
          name: '订单中心',
          component: () => import('../view/routerView'),
          children: [
            {
              path: 'orderManagement',
              name: '订单管理',
              component: () => import('../view/order/orderManagement.vue')
            },
            {
              path: 'logisticsManagement',
              name: '物流管理',
              component: () => import('../view/order/logisticsManagement.vue')
            }
          ]
        },
        {
          path: '/goods',
          name: '商品中心',
          component: () => import('../view/routerView'),
          children: [
            {
              path: 'goodsManagement',
              name: '商品管理',
              component: () => import('../view/goods/goodsManagement.vue')
            },
            {
              path: 'brandManagement',
              name: '品牌管理',
              component: () => import('../view/goods/brandManagement.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/login')
    }
  ]
});
