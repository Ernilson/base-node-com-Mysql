import { Router} from 'express';
import UserController from './controller/UserController';

const routes = new Router();

routes.get('/api/users', UserController.findAll);

routes.get('/api/users/:id', UserController.findById);



routes.get('/', (req, res) => {
    res.send("Gloria a Deus hoje e para Sempre!!");
});


//module.exports = routes;
export default routes;