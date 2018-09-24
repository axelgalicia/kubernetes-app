/*
    SERVER
*/

// External Dependencies
import express from 'express';
import bodyParser from 'body-parser';

//Controllers
import { UserController } from './user/controllers';
import { HomeController } from './home/controllers';
//Utils
import { message } from './message';
//Middleware
import { logger } from './middlewares/logger.middleware';

const app: express.Application = express();
const port: string = process.env.PORT || '4000';

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use(logger);


//Routers
app.use('/', HomeController);
app.use('/user', UserController);

app.listen(port, () => {
    console.log(message);
    console.log(`Listening at http://localhost:${port}/`);
});
