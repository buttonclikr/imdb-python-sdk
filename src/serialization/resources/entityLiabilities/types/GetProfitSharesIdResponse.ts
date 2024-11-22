/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetProfitSharesIdResponseResponse } from "./GetProfitSharesIdResponseResponse";
import { GetProfitSharesIdResponseDetails } from "./GetProfitSharesIdResponseDetails";

export const GetProfitSharesIdResponse: core.serialization.ObjectSchema<
    serializers.GetProfitSharesIdResponse.Raw,
    ButtonclikrApi.GetProfitSharesIdResponse
> = core.serialization.object({
    response: GetProfitSharesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetProfitSharesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetProfitSharesIdResponse {
    interface Raw {
        response?: GetProfitSharesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetProfitSharesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}