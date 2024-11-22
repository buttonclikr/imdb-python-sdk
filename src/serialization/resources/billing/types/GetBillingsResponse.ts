/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetBillingsResponseResponse } from "./GetBillingsResponseResponse";
import { GetBillingsResponseDetails } from "./GetBillingsResponseDetails";

export const GetBillingsResponse: core.serialization.ObjectSchema<
    serializers.GetBillingsResponse.Raw,
    ButtonclikrApi.GetBillingsResponse
> = core.serialization.object({
    response: GetBillingsResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetBillingsResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetBillingsResponse {
    interface Raw {
        response?: GetBillingsResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetBillingsResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}
