export class Tarea {
    constructor(id, idEmpleado, descripcion, fechaEmpezarTrabajar, estimado, estado, idProyecto) {
      this.id = id;
      this.idEmpleado = idEmpleado;
      this.descripcion = descripcion;
      this.fechaEmpezarTrabajar = fechaEmpezarTrabajar;
      this.estimado = estimado;
      this.estado = estado;
      this.idProyecto = idProyecto;
    }
  }