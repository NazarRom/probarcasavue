<template>
<MenuVue/>
<router-view></router-view>
</template>

<script>
import MenuVue from './components/MenuVue.vue';
export default {
  name: 'App',
  components: {
   MenuVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
