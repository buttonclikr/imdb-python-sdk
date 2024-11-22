/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutPlansIdResponseResponse } from "./PutPlansIdResponseResponse";
import { PutPlansIdResponseDetails } from "./PutPlansIdResponseDetails";

export const PutPlansIdResponse: core.serialization.ObjectSchema<
    serializers.PutPlansIdResponse.Raw,
    ButtonclikrApi.PutPlansIdResponse
> = core.serialization.object({
    response: PutPlansIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutPlansIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutPlansIdResponse {
    interface Raw {
        response?: PutPlansIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutPlansIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}