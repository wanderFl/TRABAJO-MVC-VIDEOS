<template>
    <div>
      <h2> Resultados de Tareas</h2>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID Empleado</th>
              <th>Descripción</th>
              <th>Fecha de Inicio</th>
              <th>Estimado</th>
              <th>Estado</th>
              <th>ID Proyecto</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tarea in tareas" :key="tarea.id">
              <td>{{ tarea.idEmpleado }}</td>
              <td>{{ tarea.descripcion }}</td>
              <td>{{ formatearFecha(tarea.fechaEmpezarTrabajar) }}</td>
              <td>{{ tarea.estimado }}</td>
              <td>{{ tarea.estado }}</td>
              <td>{{ tarea.idProyecto }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchTareas } from '../controllers/tareasController';
  
  export default {
    name: 'Tareas',
    data() {
      return {
        tareas: []
      };
    },
    async created() {
      this.tareas = await fetchTareas();
    },
    methods: {
      formatearFecha(fecha) {
        return fecha; 
      }
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
    border: 1px solid #ccc;
  }
  
  .table th,
  .table td {
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #61da0a;
  }
  
  .table th {
    font-weight: bold;
    background-color: #21e307;
  }
  </style>
  