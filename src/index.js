import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './docs/swagger.config.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(userRouter);

app.listen(3334, () => console.log('running at: http://localhost:3334'));