/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCredentialsResponseResponse } from "./GetCredentialsResponseResponse";
import { GetCredentialsResponseDetails } from "./GetCredentialsResponseDetails";

export const GetCredentialsResponse: core.serialization.ObjectSchema<
    serializers.GetCredentialsResponse.Raw,
    ButtonclikrApi.GetCredentialsResponse
> = core.serialization.object({
    response: GetCredentialsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetCredentialsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetCredentialsResponse {
    interface Raw {
        response?: GetCredentialsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetCredentialsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}