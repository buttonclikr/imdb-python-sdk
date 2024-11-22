/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetPlansResponseResponse } from "./GetPlansResponseResponse";
import { GetPlansResponseDetails } from "./GetPlansResponseDetails";

export const GetPlansResponse: core.serialization.ObjectSchema<
    serializers.GetPlansResponse.Raw,
    ButtonclikrApi.GetPlansResponse
> = core.serialization.object({
    response: GetPlansResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetPlansResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetPlansResponse {
    interface Raw {
        response?: GetPlansResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetPlansResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}