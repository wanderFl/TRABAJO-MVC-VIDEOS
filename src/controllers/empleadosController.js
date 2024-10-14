import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Empleado } from '../models/empleado';

export const fetchEmpleados = async () => {
  try {
    const empleados = [];
    const querySnapshot = await getDocs(collection(db, 'empleados'));
    querySnapshot.forEach(doc => {
      empleados.push(new Empleado(doc.id, doc.data().Nombre, doc.data().Apellido));
    });
    return empleados;
  } catch (error) {
    console.error('Error fetching empleados:', error);
    throw error;
  }
};