//importo el router y el historial 
import {createRouter,createWebHistory} from 'vue-router'
//importo los componentes que voy a usar
import HospitalComponent from './components/HospitalComponent.vue'
import ProbarFilter from './components/ProbarFilter.vue'
import ProbarComputed from './components/ProbarComputed.vue'
import SweetAlert from './components/SweetAlert.vue'
import HospitalDetalles from './components/HospitalDetalles.vue'
import UpdateHospital from './components/UpdateHospital.vue'
import InsertHospitales from './components/InsertHospitales.vue'
//ahora creo la constante con las rutas

const routes = [
    {
        path:"/", component:HospitalComponent
    },
    {
        path:"/insert",component:InsertHospitales
    },
    {
        path:"/filter",component:ProbarFilter
    },
    {
        path:"/computed",component:ProbarComputed
    },
    {
        path:"/alert",component:SweetAlert
    },
    {
        path:"/detalles/:nombre/:direccion/:telefono",component:HospitalDetalles
    },
    {
        path:"/update/:id",component:UpdateHospital
    }
]

//ahora creo wl router con el web history
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
//lo exportamos
export default router;