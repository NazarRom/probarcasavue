<template>
  <div>
    <h1>
        Insert
    </h1>
    <form method="post" v-on:submit.prevent="insertHospital()">
        <label>ID: </label>
        <input type="number" class="form-control" v-model="datos.idHospital"/>
        <label>Nombre: </label>
        <input type="text" class="form-control" v-model="datos.nombre"/>
        <label>Direccion:</label>
        <input type="text" class="form-control" v-model="datos.direccion"/>
        <label>Telefono:</label>
        <input type="text" class="form-control" v-model="datos.telefono"/>
        <label>Camas:</label>
        <input type="number" class="form-control" v-model="datos.camas"/>
        <button class="btn btn-success">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServicesHospital from '@/services/ServicesHospital';
const services = new ServicesHospital();
export default {
name:"InsertHospitales",
data(){
    return{
        datos:{
            idHospital:0,
            nombre:"",
            direccion:"",
            telefono:"",
            camas:0
        }
    }
},
methods:{
    insertHospital(){
        services.insertHospital(this.datos).then(res=>{
            console.log(res);
            this.$router.push("/");
        })
    }
}
}
</script>

<style>

</style>