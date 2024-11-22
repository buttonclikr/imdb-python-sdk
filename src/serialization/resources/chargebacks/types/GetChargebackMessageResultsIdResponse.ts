/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetChargebackMessageResultsIdResponseResponse } from "./GetChargebackMessageResultsIdResponseResponse";
import { GetChargebackMessageResultsIdResponseDetails } from "./GetChargebackMessageResultsIdResponseDetails";

export const GetChargebackMessageResultsIdResponse: core.serialization.ObjectSchema<
    serializers.GetChargebackMessageResultsIdResponse.Raw,
    ButtonclikrApi.GetChargebackMessageResultsIdResponse
> = core.serialization.object({
    response: GetChargebackMessageResultsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetChargebackMessageResultsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetChargebackMessageResultsIdResponse {
    interface Raw {
        response?: GetChargebackMessageResultsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetChargebackMessageResultsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}