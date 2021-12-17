import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import VueSimpleAlert from "vue-simple-alert";
import VueFileAgent from 'vue-file-agent';
import Vuex from 'vuex'

Vue.use(Vuex)  

Vue.use(VueSweetalert2);
Vue.use(VueSimpleAlert);
Vue.use(VueFileAgent);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
