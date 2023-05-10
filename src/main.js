import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from "./router"; 
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from 'mitt'
import VueCookies from 'vue-cookies';
import './index.css'


loadFonts()

const emitter = mitt()
const app = createApp(App)
app.use(vuetify).use(router).use(store).use(VueAxios, axios).use(VueCookies, { expire: '7d'})

app.config.globalProperties.emitter = emitter
app.mount('#app')

