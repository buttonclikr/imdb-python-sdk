/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetFeeRulesResponseResponse } from "./GetFeeRulesResponseResponse";
import { GetFeeRulesResponseDetails } from "./GetFeeRulesResponseDetails";

export const GetFeeRulesResponse: core.serialization.ObjectSchema<
    serializers.GetFeeRulesResponse.Raw,
    ButtonclikrApi.GetFeeRulesResponse
> = core.serialization.object({
    response: GetFeeRulesResponseResponse.optional(),
    data: core.serialization.unknown().optional(),
    details: GetFeeRulesResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace GetFeeRulesResponse {
    interface Raw {
        response?: GetFeeRulesResponseResponse.Raw | null;
        data?: unknown | null;
        details?: GetFeeRulesResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}