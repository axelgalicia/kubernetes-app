import { User } from "../domain/user";
import { ValidatorResponse } from "../../common/validatorReponse";
import { ValidatorError } from "../../common/validatorError";
import { Utils } from "../../common/utils";

export class UserValidator {

    public static validate(user: User): ValidatorResponse {
        let validator = new ValidatorResponse(true, []);
        let { username, name, role, yearsOfExperience } = user;

        // Empty Values
        if (!user) {
            validator.addError(ValidatorError.emptyFieldError('user'));
        } if (!username) {
            validator.addError(ValidatorError.emptyFieldError('username'));
        } if (!name) {
            validator.addError(ValidatorError.emptyFieldError('name'));
        } if (!role) {
            validator.addError(ValidatorError.emptyFieldError('role'));
        } if (!yearsOfExperience) {
            validator.addError(ValidatorError.emptyFieldError('yearsOfExperience'));
        } 

            if(!validator.success) {
                return validator;
            }
        
        //Correct format
        if(!Utils.isType(username, 'string')) {
            validator.addError(ValidatorError.invalidValueTypeError('username', 'string'));
        }
        if(!Utils.isType(name, 'string')) {
            validator.addError(ValidatorError.invalidValueTypeError('name', 'string'));
        }
        if(!Utils.isType(role, 'string')) {
            validator.addError(ValidatorError.invalidValueTypeError('role', 'string'));
        }
        if (
            user.yearsOfExperience &&
            (isNaN(user.yearsOfExperience) ||
                (user.yearsOfExperience < 0 || user.yearsOfExperience > 100))) {
            validator.addError(ValidatorError.invalidValueError('yearsOfExperience', 'value has to be >= 0 <= 100'));
        }


        return validator;
    }
}