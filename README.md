# Buy Games (Aplicación para comprar videojuegos online)

## Descripción

Este proyecto es una tienda de videojuegos en línea desarrollada utilizando la **arquitectura de tres capas**. Los usuarios pueden buscar y visualizar videojuegos de diferentes plataformas, con detalles como el precio y la plataforma disponible. La aplicación está organizada en tres capas:
- **Capa de Presentación**: Desarrollada con HTML, CSS y JavaScript.
- **Capa de Lógica de Negocio**: Implementada en Java con Spring Boot.
- **Capa de Persistencia de Datos**: Utiliza una base de datos MySQL para almacenar la información de los videojuegos.

## Arquitectura de Tres Capas

1. **Capa de Presentación (Frontend)**:
   - Interfaz construida con **HTML5**, **CSS3** y **JavaScript**.
   - Permite a los usuarios buscar videojuegos mediante un formulario y ver los resultados en una tabla interactiva.
   
2. **Capa de Lógica de Negocio (Backend)**:
   - Utiliza **Spring Boot** para gestionar las solicitudes HTTP enviadas por la capa de presentación.
   - Controladores REST procesan las solicitudes de búsqueda de videojuegos y obtienen datos desde la capa de persistencia.

3. **Capa de Persistencia de Datos (Base de Datos)**:
   - Base de datos **MySQL** que almacena información sobre los videojuegos (título, plataforma, precio).
   - Utiliza **Spring Data JPA** para realizar operaciones CRUD y consultas.

## Tecnologías

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Java, Spring Boot, Spring Data JPA
- **Base de Datos**: MySQL
- **Servidor**: Spring Boot embebido con Tomcat
- **API**: RESTful API

## Instalación

### Prerrequisitos

- **Java 11** o superior.
- **Maven**.
- **MySQL**.

### Configuración de la Base de Datos

1. Crear la base de datos:
   ```sql
   CREATE DATABASE videojuegos_db;
   USE videojuegos_db;
   CREATE TABLE game (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255),
       platform VARCHAR(50),
       price DECIMAL(10, 2)
   );
   ```

2. Agregar algunos registros:
   ```sql
   INSERT INTO game (title, platform, price) VALUES 
   ('The Legend of Zelda: Breath of the Wild', 'Nintendo Switch', 59.99),
   ('Red Dead Redemption 2', 'PlayStation 4', 39.99),
   ('Cyberpunk 2077', 'PC', 29.99);
   ```

### Configuración del Proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/tienda-videojuegos.git
   ```

2. Configurar el archivo de propiedades de Spring Boot en `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/videojuegos_db
   spring.datasource.username=root
   spring.datasource.password=tu_contraseña
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Compilar y ejecutar la aplicación con Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. Acceder a la aplicación en tu navegador:
   ```
   http://localhost:8080
   ```

## Endpoints

- **GET /api/games?search={title}**: Busca videojuegos que coincidan con el título proporcionado.

Ejemplo:
```
GET http://localhost:8080/api/games?search=Zelda
```

## Contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y realiza un commit (`git commit -m 'Añadida nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un **Pull Request**.


