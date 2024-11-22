/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PutMessageThreadsIdResponseResponse } from "./PutMessageThreadsIdResponseResponse";
import { PutMessageThreadsIdResponseDetails } from "./PutMessageThreadsIdResponseDetails";

export const PutMessageThreadsIdResponse: core.serialization.ObjectSchema<
    serializers.PutMessageThreadsIdResponse.Raw,
    ButtonclikrApi.PutMessageThreadsIdResponse
> = core.serialization.object({
    response: PutMessageThreadsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: PutMessageThreadsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PutMessageThreadsIdResponse {
    interface Raw {
        response?: PutMessageThreadsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: PutMessageThreadsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}