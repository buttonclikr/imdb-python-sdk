/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutFeesIdResponseResponse } from "./PutFeesIdResponseResponse";
import { PutFeesIdResponseDetails } from "./PutFeesIdResponseDetails";

export const PutFeesIdResponse: core.serialization.ObjectSchema<
    serializers.PutFeesIdResponse.Raw,
    ButtonclikrApi.PutFeesIdResponse
> = core.serialization.object({
    response: PutFeesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutFeesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutFeesIdResponse {
    interface Raw {
        response?: PutFeesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutFeesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
