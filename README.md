
# Gestión de Proyectos con Vue 3 y Firebase

Este proyecto es una aplicación de gestión de proyectos construida con Vue 3, utilizando Firebase Firestore como base de datos. La aplicación permite gestionar empleados, tareas y proyectos, así como filtrar tareas basadas en fechas específicas.

## Estructura del Proyecto

El proyecto sigue el patrón MVC (Modelo-Vista-Controlador) utilizando Vuex para la gestión del estado y Firebase para la base de datos.

```
src/
├── assets/                      # Archivos estáticos (CSS, imágenes, etc.)
├── components/                  # Componentes Vue
│   ├── Empleados.vue            # Componente para gestionar empleados
│   ├── Tareas.vue               # Componente para gestionar tareas
│   ├── Proyectos.vue            # Componente para gestionar proyectos
│   ├── Filtrado.vue             # Componente para filtrar tareas
├── controllers/                 # Controladores para gestionar la lógica de negocio
│   ├── empleadosController.js   # Lógica para empleados
│   ├── tareasController.js      # Lógica para tareas
│   └── proyectosController.js   # Lógica para proyectos
├── models/                      # Modelos de datos
│   ├── empleado.js              # Modelo de empleado
│   ├── tarea.js                 # Modelo de tarea
│   └── proyecto.js              # Modelo de proyecto
├── store/                       # Gestión del estado con Vuex
├── App.vue                      # Componente raíz
├── main.js                      # Punto de entrada de la aplicación
└── router.js                    # Configuración de rutas
```

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**

   Crea un archivo `firebase.js` en la carpeta `src` y añade la configuración de tu proyecto Firebase:
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

4. **Ejecutar la aplicación**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:8080`.

## Uso

### Gestión de Empleados

- **Ver Empleados**: La tabla muestra una lista de todos los empleados almacenados en Firebase.

### Gestión de Tareas

- **Ver Tareas**: La tabla muestra una lista de todas las tareas almacenadas en Firebase.
- **Filtrar Tareas**: Utiliza el componente de filtrado para ver tareas en un rango de fechas específico.

### Gestión de Proyectos

- **Ver Proyectos**: La tabla muestra una lista de todos los proyectos almacenados en Firebase.

## Contacto

Si tienes alguna pregunta o necesitas más información, puedes contactarme en [matheo.chavez@udla.edu.ec] o [matheo.chavez9@outlook.com].
