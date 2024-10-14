<template>
    <div>
      <h2>Proyectos </h2>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="proyecto in proyectos" :key="proyecto.id">
              <td>{{ proyecto.id }}</td>
              <td>{{ proyecto.nombre }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchProyectos } from '../controllers/proyectosController';
  
  export default {
    name: 'Proyectos',
    data() {
      return {
        proyectos: []
      };
    },
    async created() {
      this.proyectos = await fetchProyectos();
    }
  };
  </script>

  <style scoped>
.table-responsive {
  overflow-x: auto;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: #fff;
  color: #333;
  border-collapse: collapse;
  border: 1px solid yellow; /* Bordes amarillos */
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid yellow; /* Bordes amarillos */
}

.table th {
  font-weight: bold;
  background-color: #d8fe00;
  border-bottom: 1px solid yellow; /* Bordes amarillos en encabezado */
}
</style>

  