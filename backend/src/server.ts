import express from 'express';
import cors from 'cors';

import 'express-async-errors';

import routes from './routes';

// Create a new express instance
console.log('[EXPRESS] creating a new server')
const app = express();

app.use(cors());
app.use(express.json());

// Use all imported routes to
app.use(routes);

app.listen(3333, () => console.log('Web server listening on port 3333'));
