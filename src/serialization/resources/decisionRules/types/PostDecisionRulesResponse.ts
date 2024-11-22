/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostDecisionRulesResponseResponse } from "./PostDecisionRulesResponseResponse";

export const PostDecisionRulesResponse: core.serialization.ObjectSchema<
    serializers.PostDecisionRulesResponse.Raw,
    ButtonclikrApi.PostDecisionRulesResponse
> = core.serialization.object({
    response: PostDecisionRulesResponseResponse.optional(),
});

export declare namespace PostDecisionRulesResponse {
    interface Raw {
        response?: PostDecisionRulesResponseResponse.Raw | null;
    }
}