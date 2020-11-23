import { Router } from 'express';

// Routes
import auth from './auth';

const routes = Router();

routes.use('/auth', auth);

export default routes;
