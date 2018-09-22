import { Router, Request, Response } from 'express';
let getId = require('docker-container-id');


const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    (async function (res: Response) {
        let id = await getId();
        id = !!id ? id.substring(0, 11) : 'Not a container';
        const message = `Summit - Kubernetes id:[${id}]`;
        res.send(message);
    })(res);
});

export const HomeController: Router = router;