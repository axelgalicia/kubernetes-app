import { ValidatorError } from "./validatorError";

export class ValidatorResponse {
    constructor(
        public success: boolean,
        public errors: ValidatorError[]
    ) { }

    public addError(error: ValidatorError) {
        this.success = false;
        this.errors.push(error);
    }
}