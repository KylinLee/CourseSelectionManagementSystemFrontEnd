import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import {createProvider} from "./vue-apollo"
import "./plugins/element.js"
import jsCookie from "js-cookie"

Vue.prototype.$cookie = jsCookie
Vue.config.productionTip = false

new Vue({
    router,
    store,
    apolloProvider: createProvider(),
    render: h => h(App)
}).$mount("#app")
