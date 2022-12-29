import express from 'express';
import image from './api/image';
import { resolve } from 'path';
const routes = express.Router();
routes.use('/image', image);

routes.get('/', (req: express.Request, res: express.Response): void => {
    res.sendFile(resolve('src') + '/' + 'index.html');
});
export default routes;
