/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetMerchantResultsIdResponseResponse } from "./GetMerchantResultsIdResponseResponse";
import { GetMerchantResultsIdResponseDetails } from "./GetMerchantResultsIdResponseDetails";

export const GetMerchantResultsIdResponse: core.serialization.ObjectSchema<
    serializers.GetMerchantResultsIdResponse.Raw,
    ButtonclikrApi.GetMerchantResultsIdResponse
> = core.serialization.object({
    response: GetMerchantResultsIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetMerchantResultsIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetMerchantResultsIdResponse {
    interface Raw {
        response?: GetMerchantResultsIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetMerchantResultsIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}