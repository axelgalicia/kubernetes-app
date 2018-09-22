export class ValidatorError {
    constructor(
        public field: string,
        public message: string
    ) { }

    public static emptyFieldError(field: string): ValidatorError {
        return new ValidatorError(field, `${field} cannot be empty`);
    }

    public static invalidValueError(field: string, validValudMessage: string): ValidatorError {
        return new ValidatorError(field, `Invalid value for ${field}, ${validValudMessage}`);
    }
}