import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2_db'
});


// =====================================
// ENDPOINT PRINCIPAL
// =====================================

app.get('/', async (req, res) => {
    try {
        const [resultado] = await pool.query('SELECT * FROM categorias');
        res.send(resultado);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});


// =====================================
// EJERCICIO 1
// POST /categorias
// =====================================

app.post('/categorias', async (req, res) => {

    try {

        const { nombre, descripcion } = req.body;

        if (!nombre || !descripcion) {
            return res.status(400).json({
                mensaje: 'Todos los campos son obligatorios'
            });
        }

        const [resultado] = await pool.query(
            'INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );

        res.status(201).json({
            mensaje: 'Categoría registrada correctamente',
            resultado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

});


// =====================================
// EJERCICIO 2
// GET /categorias
// =====================================

app.get('/categorias', async (req, res) => {

    try {

        const [resultado] = await pool.query(
            'SELECT * FROM categorias'
        );

        res.status(200).json(resultado);

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

});


// =====================================
// EJERCICIO 3
// GET /categorias/:id
// =====================================

app.get('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const [categoria] = await pool.query(
            'SELECT * FROM categorias WHERE id = ?',
            [id]
        );

        if (categoria.length === 0) {

            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });

        }

        const [productos] = await pool.query(
            'SELECT * FROM productos WHERE categoria_id = ?',
            [id]
        );

        res.status(200).json({
            categoria: categoria[0],
            productos
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

});


// =====================================
// EJERCICIO 4
// PATCH /categorias/:id
// =====================================
app.patch('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const { nombre, descripcion } = req.body;

        const [resultado] = await pool.query(
            `UPDATE categorias 
             SET nombre = ?, descripcion = ?
             WHERE id = ?`,
            [nombre, descripcion, id]
        );

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });

        }

        res.status(200).json({
            mensaje: 'Categoría actualizada correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

});
// =====================================
// EJERCICIO 5
// DELETE /categorias/:id
// =====================================

app.delete('/categorias/:id', async (req, res) => {

    try {

        const id = req.params.id;

        const [resultado] = await pool.query(
            'DELETE FROM categorias WHERE id = ?',
            [id]
        );

        if (resultado.affectedRows === 0) {

            return res.status(404).json({
                mensaje: 'Categoría no encontrada'
            });

        }

        res.status(200).json({
            mensaje: 'Categoría eliminada correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

});


// =====================================
// SERVIDOR
// =====================================

const PUERTO = 3001;

app.listen(PUERTO, () => {

    console.log(`Servidor en http://localhost:${PUERTO}`);

});