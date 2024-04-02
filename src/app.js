import express from 'express';
import { router as routerProducts } from './products/products.routes.js';

const app = express();

app.use(express.json())

app.use('/api/v1/', routerProducts)

export default app
