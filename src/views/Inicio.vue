<template>
    <div class="container vh-100 vw-100 container-fluid g-0">
      <div class="row">
        <div class="col-md-3">
          <Empleados />
        </div>
        <div class="col-md-6">
          <Tareas />
        </div>
        <div class="col-md-2">
          <Proyectos />
        </div>
      </div>
      <div class="row">
        <div class="col-md-10">
          <Filtrado />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Empleados from '@/components/Empleados.vue';
  import Tareas from '@/components/Tareas.vue';
  import Proyectos from '@/components/Proyectos.vue';
  import Filtrado from '@/components/Filtrado.vue';
  
  export default {
    components: {
      Empleados,
      Tareas,
      Proyectos,
      Filtrado
    }
  }
  </script>
  
  <style scoped>
  .row > .col-md-4 {
    padding: 15px;
    box-sizing: border-box;
  }
  
  .container {
    max-width: 100%;
  }
  </style>
  