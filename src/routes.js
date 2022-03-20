import db from './db/dbConfig';
import { Router} from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send("Aleluia");
});

routes.get('/api', (req, res) => {
    res.send("Gloria a Deus hoje e para Sempre!!");
});

//module.exports = routes;
export default routes;