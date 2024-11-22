/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAdjustmentsResponseResponse } from "./GetAdjustmentsResponseResponse";
import { GetAdjustmentsResponseDetails } from "./GetAdjustmentsResponseDetails";

export const GetAdjustmentsResponse: core.serialization.ObjectSchema<
    serializers.GetAdjustmentsResponse.Raw,
    ButtonclikrApi.GetAdjustmentsResponse
> = core.serialization.object({
    response: GetAdjustmentsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetAdjustmentsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAdjustmentsResponse {
    interface Raw {
        response?: GetAdjustmentsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetAdjustmentsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}