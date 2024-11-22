/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetSecretsIdResponseResponseDetails } from "./GetSecretsIdResponseResponseDetails";

export const GetSecretsIdResponseResponse: core.serialization.ObjectSchema<
    serializers.GetSecretsIdResponseResponse.Raw,
    ButtonclikrApi.GetSecretsIdResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: GetSecretsIdResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetSecretsIdResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: GetSecretsIdResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}