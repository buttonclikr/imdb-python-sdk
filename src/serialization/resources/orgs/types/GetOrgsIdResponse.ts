/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetOrgsIdResponseResponse } from "./GetOrgsIdResponseResponse";
import { GetOrgsIdResponseDetails } from "./GetOrgsIdResponseDetails";

export const GetOrgsIdResponse: core.serialization.ObjectSchema<
    serializers.GetOrgsIdResponse.Raw,
    ButtonclikrApi.GetOrgsIdResponse
> = core.serialization.object({
    response: GetOrgsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetOrgsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetOrgsIdResponse {
    interface Raw {
        response?: GetOrgsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetOrgsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}