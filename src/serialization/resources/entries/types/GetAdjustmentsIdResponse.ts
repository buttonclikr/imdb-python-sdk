/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetAdjustmentsIdResponseResponse } from "./GetAdjustmentsIdResponseResponse";
import { GetAdjustmentsIdResponseDetails } from "./GetAdjustmentsIdResponseDetails";

export const GetAdjustmentsIdResponse: core.serialization.ObjectSchema<
    serializers.GetAdjustmentsIdResponse.Raw,
    ButtonclikrApi.GetAdjustmentsIdResponse
> = core.serialization.object({
    response: GetAdjustmentsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetAdjustmentsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetAdjustmentsIdResponse {
    interface Raw {
        response?: GetAdjustmentsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetAdjustmentsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
