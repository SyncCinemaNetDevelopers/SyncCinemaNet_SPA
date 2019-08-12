import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../vue-components/App.vue';
import Homepage from '../vue-components/Homepage.vue';
import Login from '../vue-components/Login.vue';

let router = new VueRouter({
    routes : [
        { path: '/', component: Homepage },
        { path: '/login', component: Login },
    ]
})

new Vue({ render: h => h(App) , router }).$mount('#app')