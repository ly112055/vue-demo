/* eslint-disable semi */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import vuePicturePreview from 'vue-picture-preview';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vuePicturePreview);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     const token = localStorage.getItem('Authorization');
//     if (!token || token === 'null' || token === '') {
//       next('/login');
//     }
//     next();
//   }
// });
