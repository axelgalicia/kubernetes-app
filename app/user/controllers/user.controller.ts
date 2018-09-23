/*
    User Controller
*/

import { Router, Request, Response } from 'express';
import { User } from '../domain/user';
import { UserQueries } from '../cqrs/user.queries';
import { ResponseHandler } from '../../common/responseHandler';
import { UserValidator } from '../validators/user.validator';
import { ValidatorResponse } from '../../common/validatorReponse';
import { UserCommands } from '../cqrs/user.commands';
import { ValidatorError } from '../../common/validatorError';

const router: Router = Router();

// [GET user/]
router.get('/', (req: Request, res: Response) => {

    UserQueries.getAllUsers().then((users: User[]) => {
        ResponseHandler.successfulContent(res, users);
    }).catch((err: any) => {
        ResponseHandler.serverError(res, err);
    });


});

// [GET user/:username]
router.get('/:username', (req: Request, res: Response) => {
    let { username } = req.params;
    UserQueries.getUserByUsername(username).then((user: User) => {
        if (!!user) {
            ResponseHandler.successfulContent(res, user);
        } else {
            ResponseHandler.errorNotFound(res, {}, 'username not found');
        }

    }).catch((err: any) => {
        ResponseHandler.serverError(res, err);
    });
});
// [POST /user] { User }
router.post('/', (req: Request, res: Response) => {
    let { username, name, role, yearsOfExperience, onContract } = req.body;
    let user = new User(username, name, role, yearsOfExperience, onContract);
    let validator: ValidatorResponse = UserValidator.validate(user);
    if (validator.success) {
        UserQueries.getUserByUsername(username).then((user: User) => {
            if (!!user) {
                ResponseHandler.errorInvalidRequest(res, {}, 
                    [new ValidatorError('username', 'User already exist')]);

            } else {
                UserCommands.create(user).then(result => {
                    console.log(`Registering user: ${username}`);
                    ResponseHandler.successfulNoContent(res, {});
                }).catch(err => {
                    ResponseHandler.serverError(res, err);
                });
            }
        }).catch(err => {
            ResponseHandler.serverError(res, err);
        });

    } else {
        ResponseHandler.errorInvalidRequest(res, user, validator.errors);
    }
});

// [PUT /user/:username] { User }
router.put('/:username', (req: Request, res: Response) => {
    let { username } = req.params;
    let { name, role, yearsOfExperience, onContract } = req.body;
    let user = new User(username, name, role, yearsOfExperience, onContract);
    let validator: ValidatorResponse = UserValidator.validate(user);
    if (validator.success) {
        console.log(`Updating user: ${username}`);
        UserCommands.updateByUsername(user).then(result => {
            ResponseHandler.successfulContent(res, user);
        }).catch(err => {
            ResponseHandler.serverError(res, err);
        });
    } else {
        ResponseHandler.errorInvalidRequest(res, user, validator.errors);
    }
});


export const UserController: Router = router;