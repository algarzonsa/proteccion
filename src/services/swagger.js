const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Fibonacci API',
        version: '1.0.0',
        description: 'API para obtener la serie Fibonacci',
        },
    },
    apis: ['./server.js'],
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /fibonacci:
 *   get:
 *     summary: Obtiene la serie Fibonacci
 *     parameters:
 *       - in: query
 *         name: seed1
 *         schema:
 *           type: integer
 *         required: true
 *         description: Semilla 1
 *       - in: query
 *         name: seed2
 *         schema:
 *           type: integer
 *         required: true
 *         description: Semilla 2
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cantidad de números a generar
 *     responses:
 *       200:
 *         description: Serie Fibonacci generada
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: integer
 */