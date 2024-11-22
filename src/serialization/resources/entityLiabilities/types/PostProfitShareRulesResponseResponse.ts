/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostProfitShareRulesResponseResponseDetails } from "./PostProfitShareRulesResponseResponseDetails";

export const PostProfitShareRulesResponseResponse: core.serialization.ObjectSchema<
    serializers.PostProfitShareRulesResponseResponse.Raw,
    ButtonclikrApi.PostProfitShareRulesResponseResponse
> = core.serialization.object({
    data: core.serialization.unknown().optional(),
    details: PostProfitShareRulesResponseResponseDetails.optional(),
    errors: core.serialization.unknown().optional(),
});

export declare namespace PostProfitShareRulesResponseResponse {
    interface Raw {
        data?: unknown | null;
        details?: PostProfitShareRulesResponseResponseDetails.Raw | null;
        errors?: unknown | null;
    }
}