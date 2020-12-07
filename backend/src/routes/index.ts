import { Router } from 'express';

// Routes
import auth from './auth';
import products from './products';
import categories from './categories';

const routes = Router();

routes.use('/auth', auth);
routes.use('/products', products);
routes.use('/categories', categories);

export default routes;
