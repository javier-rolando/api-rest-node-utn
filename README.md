# API REST - NODE Y MONGODB

_Descripción: backend donde es posible registrar un usuario, loguearse, ver todos los usuarios guardados en la base de datos y buscar uno en específico por su ID. Además es posible crear posts, editarlos, eliminarlos y también listar todos o uno en particular._

## Comenzando 🚀

### Pre-requisitos 📋

_Ejecutar el comando **npm install** para instalar todas las dependencias._
_Además, crear un archivo .env con las siguientes variables de entorno:_

```
DB_NAME=*nombre a elección de la base de datos*
TOKEN_SECRET=*una clave secreta a elección*
```

## Cómo usar la API 🔧

### Registrar un usuario 🛠️

_Para registrar un usuario se debe hacer una petición **POST** a http://localhost:3000/api/user/register_

_Ejemplo:_

```
{
	"name": "Leandro Martinez",
	"email": "leandro@martinez.com",
	"password": "leandro123"
}

```

_Respuesta:_

```

{
    "status": "success",
    "message": "El usuario ha sido guardado satisfactoriamente.",
    "userID": "5fe00cadbcc1a33b440986ee"
}

```

### Login de usuario 🛠️

_Para loguearse se debe hacer una petición **POST** a http://localhost:3000/api/user/login_
_Esto dará el token, que está configurado para durar 3 horas._

_Ejemplo:_

```
{
    "email": "leandro@martinez.com",
    "password": "leandro123"
}

```

_Respuesta:_

```

{
    "status": "success",
    "message": "Logueado correctamente",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmUwMGNhZGJjYzFhMzNiNDQwOTg2ZWUiLCJpYXQiOjE2MDg1MTg5OTksImV4cCI6MTYwODUyOTc5OX0._7OAq3ol28K-uN2dzfqkY7kXLgYPwURnX4fafA-XtLs"
}

```

### Ver todos los usuarios 🛠️

_Para ver una lista de todos los usuarios registrados, hacer una petición **GET** a http://localhost:3000/api/user/all_

_Respuesta:_

```

{
    "status": "success",
    "users": [
        {
            "_id": "5fda900a5c143d1d944d4ce8",
            "name": "Javier",
            "email": "javier@rolando.com",
            "date": "2020-12-16T22:54:02.503Z",
            "__v": 0
        },
        {
            "_id": "5fe00cadbcc1a33b440986ee",
            "name": "Leandro Martinez",
            "email": "leandro@martinez.com",
            "date": "2020-12-21T02:47:09.291Z",
            "__v": 0
        }
    ]
}

```

### Ver un usuario en específico 🛠️

_Para ver un usuario, usar su ID para hacer una petición **GET** a http://localhost:3000/api/user/:id_

_Respuesta:_

```

{
    "status": "success",
    "user": {
        "_id": "5fe00cadbcc1a33b440986ee",
        "name": "Leandro Martinez",
        "email": "leandro@martinez.com",
        "date": "2020-12-21T02:47:09.291Z",
        "__v": 0
    }
}

```

### Crear un post 🛠️

_Para crear un post se debe hacer una petición **POST** a http://localhost:3000/api/posts/create_
_Es necesario tener el token recibido al loguearse y ponerlo en los Headers con el nombre de auth-token:_

_Ejemplo:_

```
{
    "title": "Título de mi post",
    "body": "Este es un contenido de ejemplo."
}

```

_Respuesta:_

```

{
    "status": "success",
    "savedPost": {
        "_id": "5fe00f8cbcc1a33b440986ef",
        "title": "Título de mi post",
        "body": "Este es un contenido de ejemplo.",
        "author": "5fe00cadbcc1a33b440986ee",
        "date": "2020-12-21T02:59:24.069Z",
        "__v": 0
    }
}

```

### Actualizar un post 🛠️

_Para actualizar un post se debe hacer una petición **PUT** a http://localhost:3000/api/posts/:id/edit utilizando el ID del post creado._
_Acá también es necesario usar el token para que la petición sea válida._

_Ejemplo:_

```
{
    "title": "Título del post editado",
    "body": "Editando también el contenido del post!"
}

```

_Respuesta:_

```

{
    "status": "success",
    "updatedPost": {
        "_id": "5fe00f8cbcc1a33b440986ef",
        "title": "Título del post editado",
        "body": "Editando también el contenido del post!",
        "author": "5fe00cadbcc1a33b440986ee",
        "date": "2020-12-21T02:59:24.069Z",
        "__v": 0
    }
}

```

### Eliminar un post 🛠️

_Para eliminar un post se debe hacer una petición **DELETE** a http://localhost:3000/api/posts/:id/delete utilizando el ID del post a borrar._
_Acá también es necesario usar el token para que la petición sea válida._

_Respuesta:_

```

{
    "status": "success",
    "message": "Post eliminado satisfactoriamente."
}

```

### Ver todos los posts 🛠️

_Para ver una lista de todos los posts guardados, hacer una petición **GET** a http://localhost:3000/api/posts/all_
_Cada post está relacionado con el ID del que creó dicho post y se puede ver en "author"._

_Respuesta:_

```

{
    "status": "success",
    "posts": [
        {
            "_id": "5fe01266dea6d50bfc52ead1",
            "title": "Post numero 1",
            "body": "Contenido del post numero 1",
            "author": {
                "_id": "5fe00cadbcc1a33b440986ee",
                "name": "Leandro Martinez",
                "email": "leandro@martinez.com"
            },
            "date": "2020-12-21T03:11:34.862Z",
            "__v": 0
        },
        {
            "_id": "5fe01276dea6d50bfc52ead2",
            "title": "Post numero 2",
            "body": "Contenido del post numero 2",
            "author": {
                "_id": "5fe00cadbcc1a33b440986ee",
                "name": "Leandro Martinez",
                "email": "leandro@martinez.com"
            },
            "date": "2020-12-21T03:11:50.653Z",
            "__v": 0
        }
    ]
}

```

### Ver un post en específico 🛠️

_Para ver un post, usar su ID para hacer una petición **GET** a http://localhost:3000/api/posts/:id_
_Acá también podemos ver dicha relación entre el ID del post y del usuario creador._

_Respuesta:_

```

{
    "status": "success",
    "post": {
        "_id": "5fe01276dea6d50bfc52ead2",
        "title": "Post numero 2",
        "body": "Contenido del post numero 2",
        "author": {
            "_id": "5fe00cadbcc1a33b440986ee",
            "name": "Leandro Martinez",
            "email": "leandro@martinez.com"
        },
        "date": "2020-12-21T03:11:50.653Z",
        "__v": 0
    }
}

```

## Hecho con 🛠️

- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/es)
- [Mongoose](https://mongoosejs.com/)

## Autor ✒️

- **Javier Rolando**
