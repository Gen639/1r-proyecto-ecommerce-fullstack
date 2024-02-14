
# Proyecto Backend - Tienda en Línea (E-commerce)



![Banner  verduras](http://www.cambia.pe/wp-content/uploads/2014/12/VEGETALES-banner.jpg)


## Introducción

Este proyecto de backend fusiona habilidades en Node.js, Express y MySQL/Sequelize. El enfoque principal es crear una API REST para una tienda en línea (e-commerce).

## Descripción

Desarrollar una API REST que cumpla con los siguientes criterios:

- Registro de usuarios con cifrado de contraseñas utilizando Bcrypt.

- Autenticación de usuarios mediante token y middleware.

- Implementación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

- Al menos una relación Many-to-Many y otra One-to-Many en la base de datos.

- Uso de seeders para poblar la base de datos con datos de prueba.


## Tecnologías Utilizadas

- Node.js
- Express
- MySQL con Sequelize
- Bcrypt para cifrado de contraseñas
- Git (uso de ramas, commits legibles)
- Seeders para inicialización de datos
- Supertest
- Jest
- User test



## Instrucciones de Configuración

1. Clona el repositorio en tu máquina local.

2. Instala las dependencias utilizando npm install.

3. Configura la base de datos en el archivo de configuración (config/config.json) de Sequelize.

4. Ejecuta las migraciones para establecer la estructura de la base de datos.

5. Utiliza seeders para poblar la base de datos con datos de prueba.

## Ejecución del Proyecto

1. Inicia el servidor con el comando npm start.

2. Accede a la API mediante la URL especificada en la documentación.


# Endpoints

#### Asegúrate de configurar las rutas en tu archivo main.js para que la aplicación pueda manejar las solicitudes correctamente. Agrega las siguientes líneas al archivo main.js:
#### app.use("/users", require("./routes/users"));
#### app.use("/products", require("./routes/products"));
#### app.use("/categories", require("./routes/categories"));
#### app.use("/orders", require("./routes/orders"));
#### Esto asegurará que las rutas relacionadas con usuarios, productos, categorías y pedidos estén correctamente enlazadas y puedan ser accedidas a través de las URL correspondientes.

## Usuarios
- Este endpoint se utiliza para recuperar información detallada de un usuario especifico en nuestra api.

### Crear Usuario

- **Ruta:** `POST /users` 
- **Controlador:** `UserController.create`

### Obtener Todos los Usuarios

- **Ruta:** `GET /users`
- **Controlador:** `UserController.getAll`

### Iniciar Sesión

- **Ruta:** `POST /users / login`
- **Controlador:** `UserController.login`

### Obtener Órdenes del Usuario

- **Ruta:** `GET /users / getUserOrders/:id`
- **Parámetro:** `id` (Identificador del Usuario)
- **Controlador:** `UserController.getUserInfo`

### Cerrar Sesión

- **Ruta:** `DELETE / users `
- **Middleware:** `authentication` (Middleware de autenticación)
- **Controlador:** `UserController.logout`


## Categorias

### Obtener Todas las Categorías con Productos

- **Ruta:** `GET / categories`
- **Controlador:** `CategoryController.obtenerCategoriasConProductos`

### Obtener Categoría por ID

- **Ruta:** `GET /categories /id/:id`
- **Parámetro:** `id` (Identificador de la Categoría)
- **Controlador:** `CategoryController.obtenerCategoriaPorId`

### Buscar Categoría por Nombre

- **Ruta:** `GET / categories /buscar`
- **Controlador:** `CategoryController.buscarCategoriaPorNombre`

### Crear Nueva Categoría

- **Ruta:** `POST / categories`
- **Controlador:** `CategoryController.crearCategoria`

### Borrar Categoría

- **Ruta:** `DELETE / categories / :id`
- **Parámetro:** `id` (Identificador de la Categoría a borrar)
- **Controlador:** `CategoryController.borrarCategoria`

### Actualizar Categoría

- **Ruta:** `PUT / categories /:id`
- **Parámetro:** `id` (Identificador de la Categoría a actualizar)
- **Controlador:** `CategoryController.updateCategoria`


## Productos
- Este endpoint se utiliza para recuperar información detallada de los productos en nuestra api.

### Crear un Nuevo Producto

Este endpoint permite la creación de un nuevo producto. Solo los usuarios autenticados con privilegios de administrador pueden acceder a esta ruta.
- **Ruta:** `POST /products`
- **Middleware:** authentication, isAdmin
- **Controlador:** `ProductController.create`

### Obtener Todos los Productos

- **Ruta:** `GET/products`
- **Controlador:** `ProductController.getAll`

### Obtener Producto con Categoría

- **Ruta:** `GET /products/withCategory/:id`
- **Controlador:** `ProductController.getByIdCateg`

### Obtener Producto por ID

- **Ruta:** `GET /products/id/:id`
- **Controlador:** `ProductController.getById`

### Filtrar Productos - Precio de Mayor a Menor

- **Ruta:** `GET /products/filter/highToLowPrice`
- **Controlador:** `ProductController.highToLow`

### Actualizar Producto por ID

Actualiza los detalles de un producto específico. Solo los usuarios autenticados con privilegios de administrador pueden acceder a esta ruta.
- **Ruta:** `PUT /products/id/:id`
- **Middleware:** authentication, isAdmin
- **Controlador:** `ProductController.updateById`

### Eliminar Producto por ID

Elimina un producto específico del sistema. Solo los usuarios autenticados con privilegios de administrador pueden acceder a esta ruta.
- **Ruta:** `DELETE /products/id/:id`
- **Middleware:** authentication, isAdmin
- **Método del Controlador:** `ProductController.delete`



## Pedidos

A continuación se detallan los puntos finales (endpoints) disponibles para gestionar pedidos en nuestra API:

### Crear Nuevo Pedido

- **Ruta:** `POST /orders `
- **Controlador:** `OrderController.create`

### Obtener Todos los Pedidos con Productos

- **Ruta:** `GET /orders `
- **Controlador:** `OrderController.getAll`

Este endpoint devuelve todos los pedidos existentes junto con la información detallada de los productos asociados a cada pedido.


# Relaciones entre Tablas

A continuación se describen las relaciones entre las tablas principales de nuestra base de datos:

## Tabla: Categories

La tabla de Categorías almacena información sobre las distintas categorías de productos disponibles.

### Relaciones:

- **Productos:** Una categoría puede tener muchos productos, pero un producto pertenece a una sola categoría.

## Tabla: Products

La tabla de Productos almacena detalles sobre los productos disponibles en nuestra plataforma.

### Relaciones:

- **Categoría:** Cada producto pertenece a una categoría específica.

- **Pedidos:** Un producto puede estar presente en muchos pedidos, pero un pedido contiene productos específicos.

## Tabla: Users

La tabla de Usuarios almacena información sobre los usuarios registrados en nuestra aplicación.

### Relaciones:

- **Pedidos:** Un usuario puede realizar muchos pedidos, pero cada pedido está asociado a un único usuario.

## Tabla: Orders

La tabla de Pedidos registra información sobre los pedidos realizados por los usuarios.

### Relaciones:

- **Usuarios:** Cada pedido está asociado a un único usuario.

- **Productos:** Un pedido puede contener muchos productos, y cada producto en el pedido está relacionado con un producto específico.



# Verificación por Correo Electrónico

Implementamos un sistema de verificación por correo electrónico para mejorar la seguridad y la autenticación de los usuarios. A continuación, se describe el proceso y cómo funciona.

## Proceso de Verificación por Correo Electrónico

1. **Registro de Usuario:**
   - Cuando un usuario se registra en nuestra plataforma, se le pide proporcionar una dirección de correo electrónico válida.

2. **Generación de Token de Verificación:**
   - Después de un registro exitoso, se genera un token de verificación único asociado al usuario.

3. **Envío del Correo Electrónico de Verificación:**
   - Utilizamos Nodemailer para enviar un correo electrónico al usuario recién registrado. Este correo contiene un enlace especial que lleva al usuario a la página de verificación.

4. **Verificación del Usuario:**
   - El usuario hace clic en el enlace del correo electrónico, lo que lo lleva a la página de verificación. Allí, el token se valida y la cuenta del usuario se marca como verificada.

# Las pruebas con Jest
 - En el proyecto hemos introducido la prueba de Jest y la Superprueba. La prueba llega al punto final de creación del usuario.
 - Para ejecutar la prueba es necesario cambiar el entorno de "Development" a "Test", de la siguiente manera:
`export NODE_ENV=test`
O si estas en windows prueba:
`SET NODE_ENV=test`
En PowerShell:
`$env:NODE_ENV="test"`
- Puedes iniciar la prueba con el comando
`npm run test:watch`
- Tenga en cuenta que probará la creación del usuario, incluida la parte del envío de un correo electrónico de confirmación; para esto se requiere una dirección de correo electrónico válida y la contraseña de la aplicación.

# Autores 
[EderJulian](https://github.com/EderJulian) y [Gen639](https://github.com/Gen639)





