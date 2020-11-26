import { Router } from 'express';

const routes = Router();

// Login Router
routes.get('/login', (request, response) => {
  return response.status(200).json({ message: 'Hello World!' });
});

export default routes;
