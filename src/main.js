

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import store from './store.js';
import Vuelidate from 'vuelidate'


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura 
    }
});

app.use(router);
app.use(Vuelidate);
app.use(VueSweetalert2);
app.use(store);


app.mount('#app')
