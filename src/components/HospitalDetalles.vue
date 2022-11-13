<template>
  <div>
    <h1>
        nombre: {{$route.params.nombre}}<br/>
        direccion: {{$route.params.direccion}}<br/>
        telefono: {{$route.params.telefono}}<br/>
    </h1>
    <router-link to="/" class="btn btn-success">Volver</router-link>
  </div>
</template>

<script>
export default {
name:"HospitalDetalles"
}
</script>

<style>

</style>