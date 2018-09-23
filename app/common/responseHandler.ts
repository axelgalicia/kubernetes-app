import { ErrorType } from "./errorType";
import { GenericResponse } from "./genericResponse";
import { Response } from 'express';

export class ResponseHandler {

    constructor(public response: Response) { }

    public static successfulContent(res: Response, content: any) {
        res.status(200).send(new GenericResponse(true, content));
    }

    public static successfulNoContent(res: Response, content?: any) {
        res.status(204).send(new GenericResponse(true));
    }

    public static errorInvalidRequest(res: Response, content: any, errors: any[]) {
        res.status(400).send(new GenericResponse(false, content, ErrorType.INVALID_REQUEST, ErrorType.INVALID_REQUEST, errors));
    }

    public static errorNotFound(res: Response, content: any, errorMessage?: string) {
        res.status(404).send(new GenericResponse(false, content,
            errorMessage ? errorMessage : ErrorType.NOT_FOUND, ErrorType.NOT_FOUND));
    }

    public static serverError(res: Response, err: any) {
        res.status(500).send(new GenericResponse(false, null, ErrorType.SERVER_ERROR,ErrorType.SERVER_ERROR, err));
    }

}