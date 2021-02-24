import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';

const routes = Router();

routes.get('/', CategoriesController.index);
routes.post('/create', CategoriesController.create);

export default routes;
