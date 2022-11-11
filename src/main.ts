import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import a from './assets/vue.svg';
import b from './assets/vue.svg?url';
import c from './assets/vue.svg?inline';
console.log(a);
console.log(b);
console.log(c);

const imgUrl = new URL('./assets/vue.svg', import.meta.url).href;
console.log(imgUrl);
const el = document.createElement('img');
el.src = imgUrl;
document.body.appendChild(el);

createApp(App).mount('#app');
