CREATE DATABASE practica2_db;
USE practica2_db;

CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255)
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoria_id INT,
    FOREIGN KEY (categoria_id)
    REFERENCES categorias(id)
    ON DELETE CASCADE
);

INSERT INTO categorias(nombre, descripcion)
VALUES
('Electrónica', 'Dispositivos electrónicos y gadgets'),
('Oficina', 'Material y accesorios de oficina'),
('Hogar', 'Productos para el hogar'),
('Deportes', 'Artículos deportivos');

INSERT INTO productos(nombre, precio, categoria_id)
VALUES
('Laptop Lenovo', 4500.00, 1),
('Mouse Gamer', 150.00, 1),
('Impresora Epson', 1200.00, 2),
('Cuaderno', 15.50, 2),
('Silla', 350.00, 3),
('Pelota', 80.00, 4);