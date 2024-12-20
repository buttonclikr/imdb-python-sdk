/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as ButtonclikrApi from "../index";

export class InternalServerError extends errors.ButtonclikrApiError {
    constructor(body: ButtonclikrApi.Problem) {
        super({
            message: "InternalServerError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
