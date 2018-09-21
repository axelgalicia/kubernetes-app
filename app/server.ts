/*
    SERVER
*/

// External Dependencies
import express from 'express';
import bodyParser from 'body-parser';

//Controllers
import { UserController } from './controllers/users';
import { HomeController } from './controllers/home';
//Utils
import { message } from './message';




const app: express.Application = express();
const port: string = process.env.PORT || '3000';

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routers
app.use('/', HomeController);
app.use('/user', UserController);

app.listen(port, () => {
    console.log(message);
    console.log(`Listening at http://localhost:${port}/`);
});
