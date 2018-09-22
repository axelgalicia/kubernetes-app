import { User } from "../domain/user";
import { ValidatorResponse } from "../../common/validatorReponse";
import { ValidatorError } from "../../common/validatorError";

export class UserValidator {

    public static validate(user: User): ValidatorResponse {
        let validator = new ValidatorResponse(true, []);

        // Empty Values
        if (!user) {
            validator.addError(ValidatorError.emptyFieldError('user'));
        } if (!user.username) {
            validator.addError(ValidatorError.emptyFieldError('username'));
        } if (!user.name) {
            validator.addError(ValidatorError.emptyFieldError('name'));
        } if (!user.role) {
            validator.addError(ValidatorError.emptyFieldError('role'));
        } if (!user.yearsOfExperience) {
            validator.addError(ValidatorError.emptyFieldError('yearsOfExperience'));
        } if (
            user.yearsOfExperience &&
            (isNaN(user.yearsOfExperience) ||
                (user.yearsOfExperience < 0 || user.yearsOfExperience > 100))) {
            validator.addError(ValidatorError.invalidValueError('yearsOfExperience', 'value has to be >= 0 <= 100'));
        }
        return validator;
    }
}