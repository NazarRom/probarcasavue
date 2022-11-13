<template>
  <div>
    <h1>modificar</h1>
    <div v-if="hospital">
      <form method="post" v-on:submit.prevent="updateHospital()">
        <input
          type="hidden"
          class="form-control"
          v-model="hospital.idHospital"
        />
        <label>Nombre: </label>
        <input type="text" class="form-control" v-model="hospital.nombre" />
        <label>Direccion:</label>
        <input type="text" class="form-control" v-model="hospital.direccion" />
        <label>Telefono:</label>
        <input type="text" class="form-control" v-model="hospital.telefono" />
        <label>Camas:</label>
        <input type="number" class="form-control" v-model="hospital.camas" />
        <button class="btn btn-success">Insertar</button>
      </form>
    </div>
  </div>
</template>

<script>
import ServicesHospital from "@/services/ServicesHospital";
const services = new ServicesHospital();
export default {
  name: "UpdateHospital",
  data() {
    return {
      hospital: null,
    };
  },
  mounted() {
    var id = this.$route.params.id;
    services.findHospital(id).then((result) => {
      this.hospital = result;
      console.log(result);
    });
  },
  methods: {
    updateHospital() {
      services.updateHospital(this.hospital).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
