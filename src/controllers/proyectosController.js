import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Proyecto } from '../models/proyecto';

export const fetchProyectos = async () => {
  try {
    const proyectos = [];
    const querySnapshot = await getDocs(collection(db, 'proyectos'));
    querySnapshot.forEach(doc => {
      proyectos.push(new Proyecto(doc.id, doc.data().nombre));
    });
    return proyectos;
  } catch (error) {
    console.error('Error fetching proyectos:', error);
    throw error;
  }
};