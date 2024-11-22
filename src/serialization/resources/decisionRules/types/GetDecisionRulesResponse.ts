/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetDecisionRulesResponseResponse } from "./GetDecisionRulesResponseResponse";

export const GetDecisionRulesResponse: core.serialization.ObjectSchema<
    serializers.GetDecisionRulesResponse.Raw,
    ButtonclikrApi.GetDecisionRulesResponse
> = core.serialization.object({
    response: GetDecisionRulesResponseResponse.optional(),
});

export declare namespace GetDecisionRulesResponse {
    interface Raw {
        response?: GetDecisionRulesResponseResponse.Raw | null;
    }
}