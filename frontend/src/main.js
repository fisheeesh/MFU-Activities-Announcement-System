import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/bootstrap.css'
import './assets/css/custom.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//darkmode
// import './assets/js/darkmodetoggle.js'


createApp(App).use(router).mount('#app')
