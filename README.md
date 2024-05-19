# ELITEBODY Backend

## Descripción

ELITEBODY es una aplicación web desarrollada para la gestión y promoción de un gimnasio. Esta aplicación permite a los usuarios consultar servicios, horarios, entrenadores, y realizar reservas de clases. Este proyecto fue llevado a cabo como parte de un proyecto académico en la academia Rolling Code por un grupo de programadores full stack.

## Deploy

[Aquí](https://elitebodycode.netlify.app/) puede ver el sitio deployado.

Credenciales para ingresar como usuario administrador:
- **email**: admin@elitebody.com
- **password**: adminPassword

## Características

- API para consultar servicios ofrecidos por el gimnasio.
- Información detallada sobre horarios y entrenadores.
- API para la reserva de clases y actividades.
- Gestión de noticias y novedades del gimnasio.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para la construcción de aplicaciones web y APIs.
- **Mongoose**: Librería para modelar datos en MongoDB.

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Nilost21/ProyectoFinalBack.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd ProyectoFinalBack
    ```

3. Instala las dependencias necesarias:
    ```bash
    npm install
    ```

4. Configura las variables de entorno:
    - Crea un archivo `.env` en la raíz del proyecto.
    - Añade las siguientes variables (modifica según tu configuración):
      ```env
      PORT
      MONGO
      JWT_SECRET
      ADMIN_USERNAME
      ADMIN_EMAIL
      ADMIN_PASSWORD
      ADMIN_LASTNAME
      ADMIN_PHONENUMBER
      ```

## Ejecución

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Esto levantará la aplicación en http://localhost:3000, o en el puerto configurado en tu archivo .env.

## Estructura del Proyecto

El proyecto sigue una estructura de carpetas organizada de la siguiente manera:

````
ProyectoFinalBack/
├── src/
│   ├── controllers/   # Controladores para manejar la lógica de la aplicación
│   ├── models/        # Modelos de Mongoose para MongoDB
│   ├── routes/        # Rutas de la API
│   ├── app.js         # Configuración de la aplicación Express
│   └── server.js      # Punto de entrada del servidor
├── .gitignore         # Archivos y directorios ignorados por Git
├── package.json       # Dependencias y scripts del proyecto
├── README.md          # Documentación del proyecto
└── .env.example       # Ejemplo de configuración de variables de entorno
````

## Clean architecture (Backend)

El proyecto sigue el principio de Arquitectura Limpia, separando las responsabilidades en capas bien definidas: Controladores, Servicios, Repositorios y Modelos. Este enfoque mejora la mantenibilidad y escalabilidad del código.

#### Controladores

Los controladores gestionan las solicitudes HTTP entrantes y las respuestas. Son responsables de recibir las entradas del usuario, procesarlas (normalmente llamando a servicios), y devolver las respuestas adecuadas.

Las rutas están organizadas en la carpeta `routes` y siguen una arquitectura limpia dividiendo la lógica en controladores, servicios y repositorios.

#### Servicios

Los servicios encapsulan la lógica de negocio y coordinan las operaciones entre los controladores y los repositorios. Esta capa se asegura de que las reglas de negocio se apliquen correctamente.

#### Repositorios

Los repositorios gestionan las operaciones de acceso a datos. Son responsables de la comunicación con la base de datos a través de los modelos, encapsulando las consultas SQL o ORM.

#### Modelos

Los modelos representan la estructura de los datos y las relaciones en la base de datos. Utilizamos Sequelize para definir estos modelos y sus asociaciones.

#### Integración de las Capas

- **Controladores**: Reciben las solicitudes del cliente, las validan y llaman a los servicios necesarios.
- **Servicios**: Contienen la lógica de negocio y coordinan las acciones entre los controladores y los repositorios.
- **Repositorios**: Realizan las operaciones de acceso a datos, comunicándose con la base de datos a través de los modelos.
- **Modelos**: Definen la estructura de los datos y las relaciones entre las tablas de la base de datos.

Esta estructura permite una separación clara de responsabilidades, facilitando la prueba, el mantenimiento y la escalabilidad del proyecto. Al seguir la Arquitectura Limpia, nos aseguramos de que cada capa tenga una única responsabilidad, promoviendo un código más organizado y manejable.

## Autores

Este proyecto fue desarrollado por un grupo de programadores de la academia Rolling Code:

    ALDERETE Ariana
    BARRIOS Macarena
    MOLINA Nicolas
    AMAYA Ricardo

## Agradecimientos

Agradecemos a la academia Rolling Code por el apoyo y la formación brindada durante el desarrollo de este proyecto.
