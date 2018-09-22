import { ErrorType } from "./errorType";

export class GenericResponse {
    constructor(
        public sucess: boolean,
        public content?: any,
        public errorMessage?: any,
        public errorType?: ErrorType,
        public errors?: any[]
    ) { }
}