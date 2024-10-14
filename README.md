
# Gestión de Proyectos con Vue 3 y Firebase con base de datos

# La aplicación permite gestionar empleados, tareas,  proyectos filtrando tafeas especificas en las fechas que el usuario desee ver.

# Estructura del Proyecto

<!-- # El proyecto sigue el patrón MVC (Modelo-Vista-Controlador) utilizando Vuex para la gestión del estado y Firebase para la base de datos. -->

```
src/
├── assets/                      # Archivos estáticos (CSS, imágenes, etc.)
├── components/                  # Componentes de Vue
│   ├── Empleados.vue            # Componente para la gestion de empleados
│   ├── Tareas.vue               # Componente para gestion de tareas
│   ├── Proyectos.vue            # Componente para gestion de proyectos
│   ├── Filtrado.vue             # Componente para filtrar tareas
├── controllers/                 # Controladores para gestionar la lógica de negocio
│   ├── empleadosController.js   # Lógica para los empleados
│   ├── tareasController.js      # Lógica para las tareas
│   └── proyectosController.js   # Lógica para los proyectos
├── models/                      # Modelos de los datos
│   ├── empleado.js              # Modelo de los empleado
│   ├── tarea.js                 # Modelo de las tarea
│   └── proyecto.js              # Modelo de  los proyecto
├── store/                       # Gestión del estado con Vuex
├── App.vue                      # Componente raíz/ principal
├── main.js                      # Punto de entrada de la aplicación
└── router.js                    # Configuración de rutas para la conexin con la base de datos
```

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/wanderFl/TRABAJO-MVC-VIDEOS.git
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


## Contacto

[wanderley.flores@udla.edu.ec]
