import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './views/formulario.vue'
import Respuestas from './views/respuestas.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/respuestas', component: Respuestas },
    ]
})