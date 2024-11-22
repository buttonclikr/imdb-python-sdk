/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as ButtonclikrApi from "../../../../api/index";
import * as core from "../../../../core";
import { PostDecisionRulesResponseResponseDetailsPage } from "./PostDecisionRulesResponseResponseDetailsPage";

export const PostDecisionRulesResponseResponseDetails: core.serialization.ObjectSchema<
    serializers.PostDecisionRulesResponseResponseDetails.Raw,
    ButtonclikrApi.PostDecisionRulesResponseResponseDetails
> = core.serialization.object({
    requestId: core.serialization.unknown().optional(),
    page: PostDecisionRulesResponseResponseDetailsPage.optional(),
});

export declare namespace PostDecisionRulesResponseResponseDetails {
    interface Raw {
        requestId?: unknown | null;
        page?: PostDecisionRulesResponseResponseDetailsPage.Raw | null;
    }
}