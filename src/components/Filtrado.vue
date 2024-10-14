<template>
    <div>
        <h2>Obtener el filtrado de Tareas </h2>
        <input type="date" v-model="fechaInicio" />
        <input type="date" v-model="fechaFin" />
        <button @click="filtrarTareas">Filtrar</button>

        <div v-if="tareasFiltradas.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th>Empleado</th>
                        <th>Tarea</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Días Pasados</th>
                        <th>Proyecto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tarea, index) in tareasFiltradas" :key="index">
                        <td>{{ tarea.Empleado }}</td>
                        <td>{{ tarea.Descripcion }}</td>
                        <td>{{ tarea.FechaEmpezarTrabajar }}</td>
                        <td>{{ tarea.FechaFin }}</td>
                        <td>{{ tarea.DiasPasados }}</td>
                        <td>{{ tarea.Proyecto }}</td>
                    </tr>
                </tbody>
            </table>
            <p>Total tareas pasadas: {{ tareasFiltradas.length }}</p>
        </div>
        <p v-else>No hay tareas que coincidan con los criterios de búsqueda.</p>
    </div>
</template>

<script>
import { fetchTareas } from '../controllers/tareasController';
import { fetchEmpleados } from '../controllers/empleadosController';
import { fetchProyectos } from '../controllers/proyectosController';

export default {
    name: 'Filtrado',
    data() {
        return {
            fechaInicio: '',
            fechaFin: '',
            tareasFiltradas: [],
            empleados: [],
            proyectos: []
        };
    },
    methods: {
        async filtrarTareas() {
            this.tareasFiltradas = [];
            const tareas = await fetchTareas();
            const empleados = await fetchEmpleados();
            const proyectos = await fetchProyectos();

            const fechaInicioInput = new Date(`${this.fechaInicio}T00:00:00`);
            const fechaFinInput = new Date(`${this.fechaFin}T23:59:59`);

            tareas.forEach(tarea => {
                const fechaInicioTarea = this.parseDate(tarea.fechaEmpezarTrabajar);

                if (fechaInicioTarea >= fechaInicioInput && fechaInicioTarea <= fechaFinInput) {
                    const empleado = empleados.find(e => e.id === tarea.idEmpleado) || {};
                    const proyecto = proyectos.find(p => p.id === tarea.idProyecto) || {};
                    const fechaFinTarea = this.calcularFechaFin(tarea.fechaEmpezarTrabajar, tarea.estimado);

                    this.tareasFiltradas.push({
                        Empleado: `${empleado.nombre} ${empleado.apellido}`,
                        Descripcion: tarea.descripcion,
                        FechaEmpezarTrabajar: tarea.fechaEmpezarTrabajar,
                        FechaFin: this.formatDate(fechaFinTarea),
                        DiasPasados: this.calcularDiasPasados(fechaFinTarea),
                        Proyecto: proyecto.nombre
                    });
                }
            });
        },
        parseDate(dateString) {
            if (!dateString) return null;
            const [month, day, year] = dateString.split('/');
            return new Date(year, month - 1, day); // Ajustamos el mes restando 1
        },
        calcularFechaFin(fechaInicio, diasEstimados) {
            const fechaInicioDate = this.parseDate(fechaInicio);
            return new Date(fechaInicioDate.getTime() + diasEstimados * 24 * 60 * 60 * 1000);
        },
        formatDate(date) {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${month}/${day}/${year}`;
        },
        calcularDiasPasados(fechaFin) {
            const fecha = new Date(fechaFin);
            if (!fecha) return 0;
            const hoy = new Date();
            const diferencia = hoy - fecha;
            return Math.floor(diferencia / (1000 * 60 * 60 * 24));
        }
    }
};
</script>



<style scoped>
.table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

.table th,
.table td {
    padding: 8px;
    text-align: left;
    border: 1px solid red; 
}

.table th {
    background-color: #f2f2f2;
}

.table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

.table tbody tr:hover {
    background-color: #f1f1f1;
}
</style>
