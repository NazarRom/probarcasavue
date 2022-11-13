<template>
  <div>
    <h1>Hospitales</h1>
    <div v-if="status==true">
        <table class="table table-primary">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DIRECCION</th>
                    <th>TELEFONO</th>
                    <th>CAMAS</th>
                    <th>Detalles</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hosp in hospitales" :key="hosp">
                    <td>{{hosp.idHospital}}</td>
                    <td>{{hosp.nombre}}</td>
                    <td>{{hosp.direccion}}</td>
                    <td>{{hosp.telefono}}</td>
                    <td>{{hosp.camas}}</td>
                    <td>
                        <router-link :to="'/detalles/' + hosp.nombre + '/' + hosp.direccion + '/' + hosp.telefono" class="btn btn-dark">Detalles</router-link>
                        <router-link :to="'/update/'+ hosp.idHospital" class="btn btn-info">Modificar</router-link>
                        <button class="btn btn-danger" @click="borrarHospitalSwal(hosp.idHospital)">Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <img src="../assets/images/loading.gif"/>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import ServicesHospital from '@/services/ServicesHospital';
const services = new ServicesHospital();
export default {
name:"HospitalComponent",
data(){
    return{
        hospitales:[],
        status:false,
        modal:false
    }
},
methods:{
    cargarDatos(){
        services.loadHospitales().then(result=>{
        this.hospitales=result;
        this.status = true;
    })
    },
    borrarHospitalSwal(id){
        Swal.fire({
        title: "Desea borrar este campo?",
        text: "El proceso no se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Borarr",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Barrado!", 
          "El Archivo se ha borrado correctamente.",
           "success");
           services.borrarHospital(id).then(result=>{
            console.log(result);
            console.log("PERRON")
            this.modal=true;
           })

        }
      });
    }
},
mounted(){
   this.cargarDatos();
},
watch:{
modal(newValue,oldValue){
if (newValue != oldValue){
    this.cargarDatos();
}
}
}
}
</script>

<style>

</style>