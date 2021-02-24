import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import ProductsController from '../controllers/ProductsController';

const routes = Router();
const upload = multer(uploadConfig);

// Get all products
routes.get('/', ProductsController.index);

// Get one products by index
// routes.get('/:id', ProductsController.show);

// Create a new product
routes.post('/create', upload.array('images'), ProductsController.create);

export default routes;
