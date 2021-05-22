import { createApp } from 'vue'
import App from './App.vue'
import Canvas from './Canvas.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueKonva from 'vue-konva'

createApp(App).use(VueKonva).mount('#app')
createApp(Canvas).mount('#canvas')

