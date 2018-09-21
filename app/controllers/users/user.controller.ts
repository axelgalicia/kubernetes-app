/*
    User Controller
*/

import { Router, Request, Response } from 'express';
import { User } from '../../domain/user';


const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello User, this is a container');
});

router.get('/:username', (req: Request, res: Response) => {
    let { username } = req.params;
    let user = new User(username, 'Axel Galicia', 'Administrator', 8, false);
    res.send(user);
});

router.put('/:username', (req: Request, res: Response) => {
    console.log(req.body);
    let { username } = req.params;
    let user = new User(username, 'Axel Galicia', 'Administrator', 8, false);
    res.send(user);
});


export const UserController: Router = router;