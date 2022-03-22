import { Router} from 'express';
import UserService from './service/UserService';

const routes = new Router();

routes.get('/api/users', UserService.findAll);

routes.get('/api/users/:id', UserService.findById);



routes.get('/', (req, res) => {
    res.send("Gloria a Deus hoje e para Sempre!!");
});


//module.exports = routes;
export default routes;