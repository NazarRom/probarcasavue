<template>
  <div>
    <h1>Sweet Alert</h1>
  </div>
  <button @click="probarAlert()">llamar</button>
</template>

<script>
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
export default {
  name: "SweetAlert",
  methods: {
    probarAlert() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Deleted!", 
          "Your file has been deleted.",
           "success");
           this.probSaray();

        }
      });
    },
    probSaray(){
      console.log("Deleted");
    }
  },
};
</script>

<style></style>
