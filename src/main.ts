import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Locales
import ruLocale from '@/locales/ru.json'
import enLocale from '@/locales/en.json'

import App from './App.vue'

// Styles
import "./assets/styles/bootstrap.css"
import "./assets/styles/app.scss"
// import "./assets/styles/style.css"

// Routes
import routes from  './routes/routes'

//Plugins
import KeycloakPlugin from '@/plugins/keycloak'

const i18n = createI18n({
    locale: 'ru',
    messages: {
        ru: ruLocale,
        en: enLocale
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(KeycloakPlugin)
app.use(router)
app.use(i18n)

app.mount('#app');
