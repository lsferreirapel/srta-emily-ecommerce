import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const routes = Router();

// Get all products
routes.get('/', ProductsController.index);

// Get one products by index
// routes.get('/:id', ProductsController.show);

// Create a new product
routes.post('/create', ProductsController.create);

export default routes;
