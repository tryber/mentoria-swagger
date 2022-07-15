import { Router } from "express";
import userController from "../controllers/user-controller.js";
import ensureAuth from "../middlewares/ensureAuth.js";

const userRouter = Router();

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Endpoints de usuário
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  - email
 *                  - password
 *              properties:
 *                  id: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  password:
 *                      type: string
 *              example:
 *                  email: trybe@trybe.com
 *                  password: 12345678
 */

/**
 * @swagger
 *  /users:
 *    get:
 *      tags: [Users]
 *      description: Endpoint retorna uma lista de usuários
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          content:
 *            application/json:         
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/User'
 */
userRouter.get('/users', ensureAuth, userController.getAll);

/**
 * @swagger
 *  /users/{id}:
 *    get:
 *      tags: [Users]
 *      description: Endpoint que retorna um usuário por id
 *      parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 */
userRouter.get('/users/:id', userController.getById);

/**
 * @swagger
 *  /users:
 *    post:
 *      tags: [Users]
 *      description: Endpoint para cadastrar um usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 */
userRouter.post('/users', userController.create);

export default userRouter;