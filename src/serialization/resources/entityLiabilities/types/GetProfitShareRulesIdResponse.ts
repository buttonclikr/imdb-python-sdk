/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetProfitShareRulesIdResponseResponse } from "./GetProfitShareRulesIdResponseResponse";
import { GetProfitShareRulesIdResponseDetails } from "./GetProfitShareRulesIdResponseDetails";

export const GetProfitShareRulesIdResponse: core.serialization.ObjectSchema<
    serializers.GetProfitShareRulesIdResponse.Raw,
    ButtonclikrApi.GetProfitShareRulesIdResponse
> = core.serialization.object({
    response: GetProfitShareRulesIdResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetProfitShareRulesIdResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetProfitShareRulesIdResponse {
    interface Raw {
        response?: GetProfitShareRulesIdResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetProfitShareRulesIdResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}