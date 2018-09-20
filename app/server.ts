/*
    SERVER
*/

import express from 'express';
import { UserController } from './controllers/users';
import { message } from './message';


const app: express.Application = express();
const port: string = process.env.PORT || '3000';

app.use('/user', UserController);

app.listen(port, () => {
    console.log(message);
    console.log(`Listening at http://localhost:${port}/`);
});
