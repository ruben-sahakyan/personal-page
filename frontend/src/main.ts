import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia();
import router from './router';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './languages';
import { defaultLocale } from './languages';

const messages = Object.assign(languages);

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
});

const app = createApp(App, {
    setup() {
        const {t} = useI18n();
        return {t};
    }
});
// state managament
app.use(pinia);
// routers
app.use(router);
// multi languages
app.use(i18n);

app.mount('#app')
