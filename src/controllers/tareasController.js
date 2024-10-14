import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Tarea } from '../models/tarea';

export const fetchTareas = async () => {
  try {
    const tareas = [];
    const querySnapshot = await getDocs(collection(db, 'tareas'));
    querySnapshot.forEach(doc => {
      tareas.push(new Tarea(
        doc.id,
        doc.data().idEmpleado,
        doc.data().Descripcion,
        doc.data().FechaEmpezarTrabajar,
        doc.data().Estimado,
        doc.data().Estado,
        doc.data().idProyecto
      ));
    });
    return tareas;
  } catch (error) {
    console.error('Error fetching tareas:', error);
    throw error;
  }
};